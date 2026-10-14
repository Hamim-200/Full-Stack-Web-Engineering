// const promise = new Promise((resolve,reject) =>{
//     let success = true

//     if(success){
//         resolve("Promise resolved successfully")
//     }
//     else{
//         reject("Promise rejected")
//     }
// })


// promise.then(result =>{
//     console.log(result)
// }).catch(arr=>{
//     console.log(arr)
// })


// console.log(promise)



const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }
            return res.json();
        })
        .then(data => {
            const container = document.getElementById("user-container");

            container.innerHTML = "";

            data.forEach(user => {
                const userCard = document.createElement("div");
                userCard.className = "user-card";

                userCard.innerHTML = `
                            <h2>${user.name}</h2>
                            <p><strong>Username:</strong> ${user.username}</p>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Address:</strong>
                                ${user.address.street}, ${user.address.suite},
                                ${user.address.city}, ${user.address.zipcode}
                            </p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                            <p><strong>Website:</strong>
                                <a href="https://${user.website}" target="_blank" rel="noopener noreferrer">
                                    ${user.website}
                                </a>
                            </p>
                            <p><strong>Company:</strong> ${user.company.name}</p>
                        `;

                container.appendChild(userCard);
            });
        })
        .catch(error => {
            document.getElementById("user-container").textContent =
                "Error loading users. Please try again.";
            console.error(error);
        });
};

fetchUser();