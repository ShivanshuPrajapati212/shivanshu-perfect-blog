// Package handlers is http handlers
package handlers

import (
	"fmt"
	"log"
	"net/http"
)

func StartServer() {
	// Normal Convention of a HTTP server
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, this is my blog")
	})

	http.HandleFunc("/get-body", createPost)
	http.HandleFunc("/get-all-posts", getAllPosts)

	if err := http.ListenAndServe(":2121", nil); err != nil {
		log.Fatal("Error running server: ", err)
	}
}
