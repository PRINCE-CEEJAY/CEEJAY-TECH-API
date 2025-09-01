import users from "./data/users.json" with { type: "json" };
import quotes from "./data/quotes.json" with {type: "json"}
import todos from "./data/todos.json" with {type:'json'}
import posts from "./data/posts.json" with {type:'json'}
import comments from "./data/comments.json" with {type:'json'}
import carts from "./data/carts.json" with {type:'json'}
import recipes from "./data/recipes.json" with {type:'json'}

export const homeController = (req, res) => {
  res.send("Hello CEEJAY, This is a NODE BACKEND API");
};

const dataMap = {
  users,
  user: users,
  quotes,
  todos,
  posts,
  comments,
  carts,
  recipes
};

export const routesController = (req, res) => {
  const username = req.params.username;
  const data = dataMap[username];

  if (data) {
    res.send(data);
  } else {
    res.send(`Hi ${username}, welcome to your route`);
  }
};


// export const routesController = (req, res) => {
//   const username = req.params.username;
//   if(username === 'users'|| username === 'user'){
//     res.send(users)
//   } else if (username === 'quotes'){
//     res.send(quotes)
//   }else if(username === 'todos'){
//     res.send(todos)
//   }else if(username === 'posts'){
//     res.send(posts)
//   }  else if (username === 'comments'){
//     res.send(comments)
//   } else if (username === 'carts'){
//     res.send(carts)
//   } else if (username === 'recipes'){
//     res.send(recipes)
//   } else {
//     res.send(`Hi ${username}, welcome to your route`);
//   }  
// };

export const portController = () => {
  console.log(`App is running on port http://localhost:3000`);
};
