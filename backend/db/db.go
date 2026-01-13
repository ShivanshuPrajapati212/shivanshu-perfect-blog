// Package db stores everything in a file
package db

import "os"

func WritePost(content string) error {
	f, err := os.OpenFile("mydb.dbdb", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return err
	}

	defer f.Close()

	if _, err := f.WriteString(content); err != nil {
		return err
	}

	return nil
}
