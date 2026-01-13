package handlers

import (
	"fmt"
	"io"
	"net/http"
)

func createPost(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Get the hell out of here, POST only.", http.StatusMethodNotAllowed)
		return
	}

	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "OH no, heart attack", http.StatusInternalServerError)
		return
	}

	content := string(body)

	fmt.Print(content)
}
