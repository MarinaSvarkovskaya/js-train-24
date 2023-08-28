console.log("Завдання: 10 ==============================");

function task10() {
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Promise 1`), 5000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Promise 1`), 2000);
  });
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Promise 1`), 3000);
  });
  Promise.any([promise1, promise2, promise3])
    .then((data) => {
      console.log("Дані з сервера:", data);
    })
    .catch((error) => {
      console.error("Виникла помилка Помилка:", error);
    });
}

// Викликаємо функцію task10
task10();
