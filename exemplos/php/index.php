<?php

require __DIR__ . '/vendor/autoload.php';

//--- Configuracoes de acesso ---
$cnpj              = '';
$token             = '';
// $cep_expedidor     = '';
$cep_destinatario  = '';
$codigo_plataforma = '';
//-------------------------------

try {

    $remetente = new \Freterapido\RemetenteRequest();
    $remetente->setCnpj($cnpj);

    // Se for informar um expedidor
    // $expedidor = new \Freterapido\ExpedidorRequest();
    // $expedidor->setEndereco(
    //     new \Freterapido\Endereco(['cep' => $cep_expedidor])
    // );

    // informar dados no construtor da class
    $destinatario = new \Freterapido\DestinatarioRequest([
        'tipo_pessoa'        => Freterapido\DestinatarioRequest\TipoPessoa::TIPOPESSOA_FISICA,
        'endereco'           => new \Freterapido\Endereco(['cep' => $cep_destinatario]),
    ]);

    $volumes = [
        new \Freterapido\VolumeRequest([
            'tipo'            => 999,
            'quantidade'      => 1,
            'altura'          => 0.20,
            'largura'         => 0.20,
            'comprimento'     => 0.20,
            'peso'            => 3.00,
            'valor'           => 200.00,
            'volumes_produto' => 1,
        ]),
        new \Freterapido\VolumeRequest([
            'tipo'            => 999,
            'sku'             => new \Google\Protobuf\StringValue(['value' => 'sku123']),
            'descricao'       => new \Google\Protobuf\StringValue(['value' => 'descricao do produto']),
            'quantidade'      => 1,
            'altura'          => 0.20,
            'largura'         => 0.20,
            'comprimento'     => 0.20,
            'peso'            => 3.00,
            'valor'           => 200.00,
            'volumes_produto' => 1,
        ]),
    ];

    $request = new \Freterapido\CalcularFreteRequest();
    $request->setTipoCobranca(Freterapido\CalcularFreteRequest\TipoCobranca::TIPOCOBRANCA_CIF);
    $request->setFiltro(Freterapido\CalcularFreteRequest\Filtro::FILTRO_SEM_FILTRO);
    $request->setLimite(new \Google\Protobuf\Int64Value(['value' => 15]));
    $request->setToken($token);
    $request->setCodigoPlataforma($codigo_plataforma);
    $request->setRetornarConsolidacao(true);
    $request->setRemetente($remetente);
    // $request->setExpedidor($expedidor);
    $request->setDestinatario($destinatario);
    $request->setVolumes($volumes);

    $client = new \Freterapido\FreteRapidoClient('grpc.freterapido.com:50050', [
        'credentials' => \Grpc\ChannelCredentials::createInsecure(),
    ]);    
    

    /** @var \Grpc\CalcularFreteResponse $response */
    list($response, $status) = $client->CalcularFrete($request)->wait();

    if ($status->code != \Grpc\STATUS_OK) {
        echo "status:\n  details: {$status->details}\n";
        return;
    }

    echo "Token da oferta: {$response->getTokenOferta()}\n";
    foreach ($response->getTransportadoras() as $oferta) {
        echo "\n{$oferta->getNome()}
        oferta: {$oferta->getOferta()}\t\tservico: {$oferta->getServico()}\tdescricao_servico: {$oferta->getDescricaoServico()->getValue()}
        cnpj: {$oferta->getCnpj()}\tlogotipo: {$oferta->getLogotipo()}
        validade: {$oferta->getValidade()->toDateTime()->format('d/m/Y')}\tprazo_entrega: {$oferta->getPrazoEntrega()}
        custo_frete: {$oferta->getCustoFrete()}\tpreco_frete: {$oferta->getPrecoFrete()}\n";
    }
} catch (Exception $e) {
    print_r($e);
}
