// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var freterapido_pb = require('./freterapido_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_freterapido_CalcularFreteRequest(arg) {
  if (!(arg instanceof freterapido_pb.CalcularFreteRequest)) {
    throw new Error('Expected argument of type freterapido.CalcularFreteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_freterapido_CalcularFreteRequest(buffer_arg) {
  return freterapido_pb.CalcularFreteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_freterapido_CalcularFreteResponse(arg) {
  if (!(arg instanceof freterapido_pb.CalcularFreteResponse)) {
    throw new Error('Expected argument of type freterapido.CalcularFreteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_freterapido_CalcularFreteResponse(buffer_arg) {
  return freterapido_pb.CalcularFreteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FreteRapidoService = exports.FreteRapidoService = {
  calcularFrete: {
    path: '/freterapido.FreteRapido/CalcularFrete',
    requestStream: false,
    responseStream: false,
    requestType: freterapido_pb.CalcularFreteRequest,
    responseType: freterapido_pb.CalcularFreteResponse,
    requestSerialize: serialize_freterapido_CalcularFreteRequest,
    requestDeserialize: deserialize_freterapido_CalcularFreteRequest,
    responseSerialize: serialize_freterapido_CalcularFreteResponse,
    responseDeserialize: deserialize_freterapido_CalcularFreteResponse,
  },
};

exports.FreteRapidoClient = grpc.makeGenericClientConstructor(FreteRapidoService);
