package indexer

import (
	"fmt"

	"github.com/tendermint/tendermint/config"
)

type SinkFactory func(cfg *config.Config, chainID string) (EventSink, error)

var registry = map[string]SinkFactory{}

func RegisterSink(name string, factory SinkFactory) {
	if _, ok := registry[name]; ok {
		panic(fmt.Sprint("duplicate indexer factory: '%s'", name))
	}
	registry[name] = factory
}

func CreateSink(name string, cfg *config.Config, chainID string) (EventSink, error) {
	factory := registry[name]
	if factory == nil {
		return nil, fmt.Errorf("unknown indexer: %s", name)
	}
	return factory(cfg, chainID)
}
