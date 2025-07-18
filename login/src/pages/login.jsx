import{useState} from "react";

export default function Loginform(){
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    function handleSubmit (e){
        e.preventDefault();
        if (!email || !password) {
            alert ("Email or password is missing");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

         if (email !== "admin@gmail.com" || password !== "hey buddy") {
      alert(
        "For demo login, use:\nEmail: admin@gmail.com\nPassword: hey buddy"
      );
      return;
    }

    fetch("https://reqres.in/api/login",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({ email, password}),
    })

    .then ((resp) => {
        if (!resp) {
            throw new Error("Login Failed");
        } else {
            return resp.json();
        }
    })

    .then ((data) => {
        localStorage.setItem("token", data.token);
        console.log(data.token)
        alert("Login Succed");
        setEmail("");
        setPassword("");
    })

    .catch((error) => {
        console.log("Login Error:", error);
        alert( error.message);
    });
    };
    
    return(
        <> 
        <div class="flex items-center justify-center min-h-screen bg-amber-100 px-4">
      <form class="bg bg-blue-200 p-8 rounded-xl shadow-md w-full max-w-sm"
       onSubmit={handleSubmit}
       >
        <div class="flex justify-center mb-4 text-black-600 text-4xl">
          <span>📚</span>
        </div>
        <h2 class="text-2xl font-bold mb-6 text-center text-black-700">
          Library Management System 
        </h2>

        <label class="block text-black text-sm mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          Value = {email}
          onChange={(e) => setEmail( e.target.value)}
          class="w-full px-3 py-2 mb-4 border border-amber-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <label class="block text-black text-sm mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          Value = {password}
          onChange={(e) => setPassword( e.target.value)}
          class="w-full px-3 py-2 mb-6 border  border-amber-500 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-amber-700 hover:text-black transition hover:cursor-pointer text-xl"
        >
            Login
        </button>
      </form>
    </div> 
        </>
    )
}