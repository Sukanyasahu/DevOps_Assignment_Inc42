// main_test.go
package main

import (
	"fmt"
	"testing"
)

func TestMain(t *testing.T) {
	expected := "Hello, World!"
	if result := fmt.Sprintf("%s", "Hello, World!"); result != expected {
		t.Errorf("Expected %s but got %s", expected, result)
	}
}
