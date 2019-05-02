// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: freterapido.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Freterapido {
  public static partial class FreteRapido
  {
    static readonly string __ServiceName = "freterapido.FreteRapido";

    static readonly grpc::Marshaller<global::Freterapido.CalcularFreteRequest> __Marshaller_freterapido_CalcularFreteRequest = grpc::Marshallers.Create((arg) => global::Google.Protobuf.MessageExtensions.ToByteArray(arg), global::Freterapido.CalcularFreteRequest.Parser.ParseFrom);
    static readonly grpc::Marshaller<global::Freterapido.CalcularFreteResponse> __Marshaller_freterapido_CalcularFreteResponse = grpc::Marshallers.Create((arg) => global::Google.Protobuf.MessageExtensions.ToByteArray(arg), global::Freterapido.CalcularFreteResponse.Parser.ParseFrom);

    static readonly grpc::Method<global::Freterapido.CalcularFreteRequest, global::Freterapido.CalcularFreteResponse> __Method_CalcularFrete = new grpc::Method<global::Freterapido.CalcularFreteRequest, global::Freterapido.CalcularFreteResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "CalcularFrete",
        __Marshaller_freterapido_CalcularFreteRequest,
        __Marshaller_freterapido_CalcularFreteResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Freterapido.FreterapidoReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of FreteRapido</summary>
    public abstract partial class FreteRapidoBase
    {
      public virtual global::System.Threading.Tasks.Task<global::Freterapido.CalcularFreteResponse> CalcularFrete(global::Freterapido.CalcularFreteRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for FreteRapido</summary>
    public partial class FreteRapidoClient : grpc::ClientBase<FreteRapidoClient>
    {
      /// <summary>Creates a new client for FreteRapido</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public FreteRapidoClient(grpc::Channel channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for FreteRapido that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public FreteRapidoClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected FreteRapidoClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected FreteRapidoClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      public virtual global::Freterapido.CalcularFreteResponse CalcularFrete(global::Freterapido.CalcularFreteRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return CalcularFrete(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual global::Freterapido.CalcularFreteResponse CalcularFrete(global::Freterapido.CalcularFreteRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_CalcularFrete, null, options, request);
      }
      public virtual grpc::AsyncUnaryCall<global::Freterapido.CalcularFreteResponse> CalcularFreteAsync(global::Freterapido.CalcularFreteRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return CalcularFreteAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      public virtual grpc::AsyncUnaryCall<global::Freterapido.CalcularFreteResponse> CalcularFreteAsync(global::Freterapido.CalcularFreteRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_CalcularFrete, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override FreteRapidoClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new FreteRapidoClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(FreteRapidoBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_CalcularFrete, serviceImpl.CalcularFrete).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, FreteRapidoBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_CalcularFrete, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Freterapido.CalcularFreteRequest, global::Freterapido.CalcularFreteResponse>(serviceImpl.CalcularFrete));
    }

  }
}
#endregion
