package users

import (
	"context"
	"errors"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func InsertUser(ctx *gin.Context, user User, usersCollection *mongo.Collection) (User, error) {
	c, err := usersCollection.Find(context.TODO(), bson.M{"$or": []bson.M{
		{"email": user.Email},
		{"username": user.Username},
	}})
	if err != nil {
		return User{}, errors.New("error finding user")
	}

	var result = []User{}
	c.All(context.TODO(), &result)
	if len(result) > 0 {
		return User{}, errors.New("user already exists")
	}

	res, err := usersCollection.InsertOne(context.TODO(), user)
	if err != nil {
		return User{}, errors.New("error inserting user")
	}

	err = usersCollection.FindOne(context.TODO(), bson.M{"_id": res.InsertedID}).Decode(&user)
	if err != nil {
		return User{}, errors.New("error finding inserted user")
	}

	return user, err
}
