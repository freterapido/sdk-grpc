<?php
// GENERATED CODE -- DO NOT EDIT!

namespace Freterapido;

/**
 */
class FreteRapidoClient extends \Grpc\BaseStub {

    /**
     * @param string $hostname hostname
     * @param array $opts channel options
     * @param \Grpc\Channel $channel (optional) re-use channel object
     */
    public function __construct($hostname, $opts, $channel = null) {
        parent::__construct($hostname, $opts, $channel);
    }

    /**
     * @param \Freterapido\CalcularFreteRequest $argument input argument
     * @param array $metadata metadata
     * @param array $options call options
     */
    public function CalcularFrete(\Freterapido\CalcularFreteRequest $argument,
      $metadata = [], $options = []) {
        return $this->_simpleRequest('/freterapido.FreteRapido/CalcularFrete',
        $argument,
        ['\Freterapido\CalcularFreteResponse', 'decode'],
        $metadata, $options);
    }

}
