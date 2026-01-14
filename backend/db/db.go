// Package db stores everything in a file
package db

import (
	"bufio"
	"os"
	"slices"
	"strings"
)

var seperator string = "!!!HiBro@@@HowAreYou###"

func WritePost(content string) error {
	f, err := os.OpenFile("mydb.dbdb", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return err
	}

	defer f.Close()

	if _, err := f.WriteString(seperator + content); err != nil {
		return err
	}

	return nil
}

func GetAllPosts() ([]string, error) {
	f, err := os.Open("mydb.dbdb")
	if err != nil {
		return []string{}, err
	}

	defer f.Close()

	var content []string

	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		content = slices.Concat(content, strings.Split(scanner.Text(), seperator))
	}

	if err := scanner.Err(); err != nil {
		return []string{}, err
	}

	return content, nil
}
