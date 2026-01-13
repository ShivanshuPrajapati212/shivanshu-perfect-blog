package handlers

import (
	"fmt"
	"io"
	"net/http"

	"shivanshu-perfect-blog/db"
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

	err = db.WritePost(content)
	if err != nil {
		fmt.Println(err)
		http.Error(w, "Well, something wrong in my db", http.StatusInternalServerError)
		return
	}

	fmt.Fprint(w, "Post Created Successful")
}
