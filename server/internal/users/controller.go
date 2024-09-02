package users

import (
	"context"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type User struct {
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password"  binding:"required"`
}

func Router(app *gin.Engine, usersCollection *mongo.Collection) {
	app.POST("/users", func(ctx *gin.Context) {
		var body = User{}
		if err := ctx.BindJSON(&body); err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		user, err := InsertUser(ctx, body, usersCollection)
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		ctx.JSON(200, gin.H{"data": user})

	})
	app.GET("/users", func(ctx *gin.Context) {
		var users []bson.M

		cursor, err := usersCollection.Find(context.TODO(), bson.M{})
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		cursor.All(context.TODO(), &users)

		ctx.JSON(200, gin.H{"users": users})
	})
	app.PUT("/users/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		var body = User{}
		if err := ctx.BindJSON(&body); err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
		usersCollection.FindOneAndUpdate(context.TODO(), bson.M{"_id": id}, bson.M{"$set": body})
		ctx.JSON(200, gin.H{"data": body})
	})
	app.DELETE("/users/:id", func(ctx *gin.Context) {
		id := ctx.Param("id")
		usersCollection.FindOneAndDelete(context.TODO(), bson.M{"_id": id})
		ctx.JSON(200, gin.H{"data": id})
	})
}
