# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: freterapido.proto

require 'google/protobuf'

require 'google/protobuf/wrappers_pb'
require 'google/protobuf/timestamp_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "freterapido.CalcularFreteRequest" do
    optional :tipo_cobranca, :enum, 1, "freterapido.CalcularFreteRequest.TipoCobranca"
    optional :filtro, :enum, 2, "freterapido.CalcularFreteRequest.Filtro"
    optional :limite, :message, 3, "google.protobuf.Int64Value"
    optional :token, :string, 4
    optional :codigo_plataforma, :string, 5
    optional :retornar_consolidacao, :bool, 6
    optional :remetente, :message, 7, "freterapido.RemetenteRequest"
    optional :expedidor, :message, 8, "freterapido.ExpedidorRequest"
    optional :destinatario, :message, 9, "freterapido.DestinatarioRequest"
    repeated :volumes, :message, 10, "freterapido.VolumeRequest"
  end
  add_enum "freterapido.CalcularFreteRequest.TipoCobranca" do
    value :TIPOCOBRANCA_UNKNOWN, 0
    value :TIPOCOBRANCA_CIF, 1
    value :TIPOCOBRANCA_FOB, 2
  end
  add_enum "freterapido.CalcularFreteRequest.Filtro" do
    value :FILTRO_SEM_FILTRO, 0
    value :FILTRO_MENOR_PRECO, 1
    value :FILTRO_MENOR_PRAZO, 2
  end
  add_message "freterapido.Endereco" do
    optional :cep, :string, 1
  end
  add_message "freterapido.RemetenteRequest" do
    optional :cnpj, :string, 1
  end
  add_message "freterapido.ExpedidorRequest" do
    optional :endereco, :message, 1, "freterapido.Endereco"
  end
  add_message "freterapido.DestinatarioRequest" do
    optional :tipo_pessoa, :enum, 1, "freterapido.DestinatarioRequest.TipoPessoa"
    optional :cnpj_cpf, :string, 2
    optional :inscricao_estadual, :string, 3
    optional :endereco, :message, 4, "freterapido.Endereco"
  end
  add_enum "freterapido.DestinatarioRequest.TipoPessoa" do
    value :TIPOPESSOA_UNKNOWN, 0
    value :TIPOPESSOA_FISICA, 1
    value :TIPOPESSOA_JURIDICA, 2
  end
  add_message "freterapido.VolumeRequest" do
    optional :tipo, :int32, 1
    optional :sku, :message, 2, "google.protobuf.StringValue"
    optional :descricao, :message, 3, "google.protobuf.StringValue"
    optional :quantidade, :int32, 4
    optional :altura, :double, 5
    optional :largura, :double, 6
    optional :comprimento, :double, 7
    optional :peso, :double, 8
    optional :valor, :double, 9
    optional :volumes_produto, :int32, 10
    optional :consolidar, :bool, 11
    optional :sobreposto, :bool, 12
    optional :tombar, :bool, 13
  end
  add_message "freterapido.CalcularFreteResponse" do
    optional :token_oferta, :string, 1
    repeated :transportadoras, :message, 2, "freterapido.TransportadoraResponse"
    repeated :volumes, :message, 3, "freterapido.VolumeResponse"
  end
  add_message "freterapido.TransportadoraResponse" do
    optional :oferta, :int64, 1
    optional :cnpj, :string, 2
    optional :logotipo, :string, 3
    optional :nome, :string, 4
    optional :servico, :string, 5
    optional :descricao_servico, :message, 6, "google.protobuf.StringValue"
    optional :prazo_entrega, :int32, 7
    optional :validade, :message, 8, "google.protobuf.Timestamp"
    optional :custo_frete, :double, 9
    optional :preco_frete, :double, 10
  end
  add_message "freterapido.VolumeResponse" do
    optional :tipo, :int32, 1
    optional :sku, :message, 2, "google.protobuf.StringValue"
    optional :descricao, :message, 3, "google.protobuf.StringValue"
    optional :quantidade, :int32, 4
    optional :altura, :double, 5
    optional :largura, :double, 6
    optional :comprimento, :double, 7
    optional :peso, :double, 8
    optional :valor, :double, 9
    optional :volumes_produto, :int32, 10
    repeated :items, :message, 11, "freterapido.VolumeResponse"
  end
end

module Freterapido
  CalcularFreteRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.CalcularFreteRequest").msgclass
  CalcularFreteRequest::TipoCobranca = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.CalcularFreteRequest.TipoCobranca").enummodule
  CalcularFreteRequest::Filtro = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.CalcularFreteRequest.Filtro").enummodule
  Endereco = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.Endereco").msgclass
  RemetenteRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.RemetenteRequest").msgclass
  ExpedidorRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.ExpedidorRequest").msgclass
  DestinatarioRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.DestinatarioRequest").msgclass
  DestinatarioRequest::TipoPessoa = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.DestinatarioRequest.TipoPessoa").enummodule
  VolumeRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.VolumeRequest").msgclass
  CalcularFreteResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.CalcularFreteResponse").msgclass
  TransportadoraResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.TransportadoraResponse").msgclass
  VolumeResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("freterapido.VolumeResponse").msgclass
end
