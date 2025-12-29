type Status = "loading" | "success" | "error";

function logStatus(status: Status):void {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

logStatus("loading");


//white Завдання:

//white Типізуй параметр status так, щоб дозволити тільки три конкретні рядкові значення: "loading", "success", "error"
//white Переконайся, що TypeScript не дозволяє передати будь-яке інше значення.
//white Типізуй повернення функції, зауваж що вона нічого явно не повертає.
//white Залиш реалізацію функції без змін.