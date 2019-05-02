
# Install GRPC

https://cloud.google.com/php/grpc


# Configurar seu projeto

* Copiar ***proto/php*** para o caminho de sua preferência dentro do seu projeto
* Incluir ***autoload***

```
{
    ...
    "autoload": {
        "psr-4": {
            "Freterapido\\": "{PATH}/Freterapido",
            "GPBMetadata\\": "{PATH}/GPBMetadata"
        }
    },
    ...
}
```

* **PATH** diretorio para ***proto/php***
