# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: freterapido.proto for package 'freterapido'

require 'grpc'
require 'freterapido_pb'

module Freterapido
  module FreteRapido
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'freterapido.FreteRapido'

      rpc :CalcularFrete, CalcularFreteRequest, CalcularFreteResponse
    end

    Stub = Service.rpc_stub_class
  end
end