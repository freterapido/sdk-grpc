/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.freterapido.TransportadoraResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.StringValue');
goog.require('proto.google.protobuf.Timestamp');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.freterapido.TransportadoraResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.freterapido.TransportadoraResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.freterapido.TransportadoraResponse.displayName = 'proto.freterapido.TransportadoraResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.freterapido.TransportadoraResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.freterapido.TransportadoraResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.freterapido.TransportadoraResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freterapido.TransportadoraResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    oferta: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cnpj: jspb.Message.getFieldWithDefault(msg, 2, ""),
    logotipo: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nome: jspb.Message.getFieldWithDefault(msg, 4, ""),
    servico: jspb.Message.getFieldWithDefault(msg, 5, ""),
    descricaoServico: (f = msg.getDescricaoServico()) && proto.google.protobuf.StringValue.toObject(includeInstance, f),
    prazoEntrega: jspb.Message.getFieldWithDefault(msg, 7, 0),
    validade: (f = msg.getValidade()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    custoFrete: +jspb.Message.getFieldWithDefault(msg, 9, 0.0),
    precoFrete: +jspb.Message.getFieldWithDefault(msg, 10, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.freterapido.TransportadoraResponse}
 */
proto.freterapido.TransportadoraResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.freterapido.TransportadoraResponse;
  return proto.freterapido.TransportadoraResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.freterapido.TransportadoraResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.freterapido.TransportadoraResponse}
 */
proto.freterapido.TransportadoraResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOferta(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCnpj(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogotipo(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNome(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServico(value);
      break;
    case 6:
      var value = new proto.google.protobuf.StringValue;
      reader.readMessage(value,proto.google.protobuf.StringValue.deserializeBinaryFromReader);
      msg.setDescricaoServico(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrazoEntrega(value);
      break;
    case 8:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setValidade(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCustoFrete(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrecoFrete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.freterapido.TransportadoraResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.freterapido.TransportadoraResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.freterapido.TransportadoraResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.freterapido.TransportadoraResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOferta();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCnpj();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLogotipo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNome();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getServico();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescricaoServico();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.protobuf.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPrazoEntrega();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getValidade();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCustoFrete();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getPrecoFrete();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
};


/**
 * optional int64 oferta = 1;
 * @return {number}
 */
proto.freterapido.TransportadoraResponse.prototype.getOferta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.freterapido.TransportadoraResponse.prototype.setOferta = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string cnpj = 2;
 * @return {string}
 */
proto.freterapido.TransportadoraResponse.prototype.getCnpj = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.freterapido.TransportadoraResponse.prototype.setCnpj = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string logotipo = 3;
 * @return {string}
 */
proto.freterapido.TransportadoraResponse.prototype.getLogotipo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.freterapido.TransportadoraResponse.prototype.setLogotipo = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nome = 4;
 * @return {string}
 */
proto.freterapido.TransportadoraResponse.prototype.getNome = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.freterapido.TransportadoraResponse.prototype.setNome = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string servico = 5;
 * @return {string}
 */
proto.freterapido.TransportadoraResponse.prototype.getServico = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.freterapido.TransportadoraResponse.prototype.setServico = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.StringValue descricao_servico = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.freterapido.TransportadoraResponse.prototype.getDescricaoServico = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.StringValue, 6));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.freterapido.TransportadoraResponse.prototype.setDescricaoServico = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.freterapido.TransportadoraResponse.prototype.clearDescricaoServico = function() {
  this.setDescricaoServico(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.freterapido.TransportadoraResponse.prototype.hasDescricaoServico = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 prazo_entrega = 7;
 * @return {number}
 */
proto.freterapido.TransportadoraResponse.prototype.getPrazoEntrega = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.freterapido.TransportadoraResponse.prototype.setPrazoEntrega = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp validade = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.freterapido.TransportadoraResponse.prototype.getValidade = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.freterapido.TransportadoraResponse.prototype.setValidade = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.freterapido.TransportadoraResponse.prototype.clearValidade = function() {
  this.setValidade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.freterapido.TransportadoraResponse.prototype.hasValidade = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double custo_frete = 9;
 * @return {number}
 */
proto.freterapido.TransportadoraResponse.prototype.getCustoFrete = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 9, 0.0));
};


/** @param {number} value */
proto.freterapido.TransportadoraResponse.prototype.setCustoFrete = function(value) {
  jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double preco_frete = 10;
 * @return {number}
 */
proto.freterapido.TransportadoraResponse.prototype.getPrecoFrete = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.freterapido.TransportadoraResponse.prototype.setPrecoFrete = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


