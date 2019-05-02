#!/bin/sh

# function gen_to(lang: string [, bin: string])
function gen_to() {
    LANG=$1
    BIN="${2:-/usr/local/bin/grpc_${LANG}_plugin}"

    rm -rf "proto/${LANG}"
    mkdir -p "proto/${LANG}"

    if [ "${LANG}" == "go" ]; then
        protoc -Iproto --go_out=plugins=grpc:proto/go proto/*.proto
    else
        protoc -Iproto --${LANG}_out=proto/${LANG} --grpc_out=proto/${LANG} --plugin=protoc-gen-grpc=${BIN} proto/*.proto
    fi
}

gen_to "go"
gen_to "php"
gen_to "js" "/usr/local/bin/grpc_node_plugin"
gen_to "python"
gen_to "ruby"
gen_to "csharp"
gen_to "cpp"
gen_to "objc" "/usr/local/bin/grpc_objective_c_plugin"
