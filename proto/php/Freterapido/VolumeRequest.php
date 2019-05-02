<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: freterapido.proto

namespace Freterapido;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>freterapido.VolumeRequest</code>
 */
class VolumeRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>int32 tipo = 1;</code>
     */
    private $tipo = 0;
    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue sku = 2;</code>
     */
    private $sku = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue descricao = 3;</code>
     */
    private $descricao = null;
    /**
     * Generated from protobuf field <code>int32 quantidade = 4;</code>
     */
    private $quantidade = 0;
    /**
     * Generated from protobuf field <code>double altura = 5;</code>
     */
    private $altura = 0.0;
    /**
     * Generated from protobuf field <code>double largura = 6;</code>
     */
    private $largura = 0.0;
    /**
     * Generated from protobuf field <code>double comprimento = 7;</code>
     */
    private $comprimento = 0.0;
    /**
     * Generated from protobuf field <code>double peso = 8;</code>
     */
    private $peso = 0.0;
    /**
     * Generated from protobuf field <code>double valor = 9;</code>
     */
    private $valor = 0.0;
    /**
     * Generated from protobuf field <code>int32 volumes_produto = 10;</code>
     */
    private $volumes_produto = 0;
    /**
     * Generated from protobuf field <code>bool consolidar = 11;</code>
     */
    private $consolidar = false;
    /**
     * Generated from protobuf field <code>bool sobreposto = 12;</code>
     */
    private $sobreposto = false;
    /**
     * Generated from protobuf field <code>bool tombar = 13;</code>
     */
    private $tombar = false;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $tipo
     *     @type \Google\Protobuf\StringValue $sku
     *     @type \Google\Protobuf\StringValue $descricao
     *     @type int $quantidade
     *     @type float $altura
     *     @type float $largura
     *     @type float $comprimento
     *     @type float $peso
     *     @type float $valor
     *     @type int $volumes_produto
     *     @type bool $consolidar
     *     @type bool $sobreposto
     *     @type bool $tombar
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Freterapido::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>int32 tipo = 1;</code>
     * @return int
     */
    public function getTipo()
    {
        return $this->tipo;
    }

    /**
     * Generated from protobuf field <code>int32 tipo = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setTipo($var)
    {
        GPBUtil::checkInt32($var);
        $this->tipo = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue sku = 2;</code>
     * @return \Google\Protobuf\StringValue
     */
    public function getSku()
    {
        return $this->sku;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue sku = 2;</code>
     * @param \Google\Protobuf\StringValue $var
     * @return $this
     */
    public function setSku($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\StringValue::class);
        $this->sku = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue descricao = 3;</code>
     * @return \Google\Protobuf\StringValue
     */
    public function getDescricao()
    {
        return $this->descricao;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue descricao = 3;</code>
     * @param \Google\Protobuf\StringValue $var
     * @return $this
     */
    public function setDescricao($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\StringValue::class);
        $this->descricao = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 quantidade = 4;</code>
     * @return int
     */
    public function getQuantidade()
    {
        return $this->quantidade;
    }

    /**
     * Generated from protobuf field <code>int32 quantidade = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setQuantidade($var)
    {
        GPBUtil::checkInt32($var);
        $this->quantidade = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double altura = 5;</code>
     * @return float
     */
    public function getAltura()
    {
        return $this->altura;
    }

    /**
     * Generated from protobuf field <code>double altura = 5;</code>
     * @param float $var
     * @return $this
     */
    public function setAltura($var)
    {
        GPBUtil::checkDouble($var);
        $this->altura = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double largura = 6;</code>
     * @return float
     */
    public function getLargura()
    {
        return $this->largura;
    }

    /**
     * Generated from protobuf field <code>double largura = 6;</code>
     * @param float $var
     * @return $this
     */
    public function setLargura($var)
    {
        GPBUtil::checkDouble($var);
        $this->largura = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double comprimento = 7;</code>
     * @return float
     */
    public function getComprimento()
    {
        return $this->comprimento;
    }

    /**
     * Generated from protobuf field <code>double comprimento = 7;</code>
     * @param float $var
     * @return $this
     */
    public function setComprimento($var)
    {
        GPBUtil::checkDouble($var);
        $this->comprimento = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double peso = 8;</code>
     * @return float
     */
    public function getPeso()
    {
        return $this->peso;
    }

    /**
     * Generated from protobuf field <code>double peso = 8;</code>
     * @param float $var
     * @return $this
     */
    public function setPeso($var)
    {
        GPBUtil::checkDouble($var);
        $this->peso = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>double valor = 9;</code>
     * @return float
     */
    public function getValor()
    {
        return $this->valor;
    }

    /**
     * Generated from protobuf field <code>double valor = 9;</code>
     * @param float $var
     * @return $this
     */
    public function setValor($var)
    {
        GPBUtil::checkDouble($var);
        $this->valor = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>int32 volumes_produto = 10;</code>
     * @return int
     */
    public function getVolumesProduto()
    {
        return $this->volumes_produto;
    }

    /**
     * Generated from protobuf field <code>int32 volumes_produto = 10;</code>
     * @param int $var
     * @return $this
     */
    public function setVolumesProduto($var)
    {
        GPBUtil::checkInt32($var);
        $this->volumes_produto = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool consolidar = 11;</code>
     * @return bool
     */
    public function getConsolidar()
    {
        return $this->consolidar;
    }

    /**
     * Generated from protobuf field <code>bool consolidar = 11;</code>
     * @param bool $var
     * @return $this
     */
    public function setConsolidar($var)
    {
        GPBUtil::checkBool($var);
        $this->consolidar = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool sobreposto = 12;</code>
     * @return bool
     */
    public function getSobreposto()
    {
        return $this->sobreposto;
    }

    /**
     * Generated from protobuf field <code>bool sobreposto = 12;</code>
     * @param bool $var
     * @return $this
     */
    public function setSobreposto($var)
    {
        GPBUtil::checkBool($var);
        $this->sobreposto = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>bool tombar = 13;</code>
     * @return bool
     */
    public function getTombar()
    {
        return $this->tombar;
    }

    /**
     * Generated from protobuf field <code>bool tombar = 13;</code>
     * @param bool $var
     * @return $this
     */
    public function setTombar($var)
    {
        GPBUtil::checkBool($var);
        $this->tombar = $var;

        return $this;
    }

}
