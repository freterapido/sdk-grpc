# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import freterapido_pb2 as freterapido__pb2


class FreteRapidoStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.CalcularFrete = channel.unary_unary(
        '/freterapido.FreteRapido/CalcularFrete',
        request_serializer=freterapido__pb2.CalcularFreteRequest.SerializeToString,
        response_deserializer=freterapido__pb2.CalcularFreteResponse.FromString,
        )


class FreteRapidoServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def CalcularFrete(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_FreteRapidoServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'CalcularFrete': grpc.unary_unary_rpc_method_handler(
          servicer.CalcularFrete,
          request_deserializer=freterapido__pb2.CalcularFreteRequest.FromString,
          response_serializer=freterapido__pb2.CalcularFreteResponse.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'freterapido.FreteRapido', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
