<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: freterapido.proto

namespace Freterapido;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>freterapido.Endereco</code>
 */
class Endereco extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string cep = 1;</code>
     */
    private $cep = '';

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $cep
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Freterapido::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string cep = 1;</code>
     * @return string
     */
    public function getCep()
    {
        return $this->cep;
    }

    /**
     * Generated from protobuf field <code>string cep = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setCep($var)
    {
        GPBUtil::checkString($var, True);
        $this->cep = $var;

        return $this;
    }

}

