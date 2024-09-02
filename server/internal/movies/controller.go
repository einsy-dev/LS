package movies

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

type Movie struct {
	ID          string `json:"id"`
	Img         string `json:"img"`
	Name        string `json:"name"`
	Year        string `json:"year"`
	Country     string `json:"country"`
	Genre       string `json:"genre"`
	Description string `json:"description"`
	Rating      string `json:"rating"`
}

func Router(app *gin.Engine, moviesCollection *mongo.Collection) {

	app.POST("/movie", func(ctx *gin.Context) {
		file, header, err := ctx.Request.FormFile("file")
		if err != nil {
			http.Error(ctx.Writer, err.Error(), http.StatusInternalServerError)
			return
		}
		defer file.Close()
		fmt.Printf("File name: %s\n", header.Filename)
		fmt.Printf("File size: %d\n", header.Size)
		dst, err := os.Create("./public/new.mp4")
		if err != nil {
			http.Error(ctx.Writer, err.Error(), http.StatusInternalServerError)
			return
		}
		io.Copy(dst, file) // save file to public", file)

		ctx.Writer.Header().Set("Content-Type", "application/json")
		movie := &Movie{
			ID:   "1",
			Img:  "https://image.tmdb.org/t/p/w300" + "/new.jpg",
			Name: "New Movie",
			Year: "2022",
		}

		ctx.Writer.Header().Set("Content-Type", "application/json")
		ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		ctx.JSON(200, movie)
	})
	app.GET("/movie/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		file, err := os.Open("./public/" + id + ".mp4")
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer file.Close()
		ctx.Writer.Header().Set("Content-Type", "video/mp4")
		http.ServeFile(ctx.Writer, ctx.Request, "./public/"+id+".mp4")
	})
}
