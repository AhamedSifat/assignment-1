# The Four Pillars of OOP in TypeScript



## Encapsulation

Encapsulation is about hiding the internal details of a class and only exposing what is necessary. Think of it like a remote. You press a button and it works. You do not need to know what happens inside.

In TypeScript, you do this with access modifiers like `private` and `public`.

```typescript
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
// account.balance = 9999; -- this makes an error
```

No one can touch `balance` directly. It prevents accidental or unauthorized changes.

---

## Inheritance

Inheritance lets one class reuse the logic of another. Instead of writing the same code twice, a child class extends a parent class and gets all its properties and methods for free.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

const dog = new Dog("sifat");
dog.move(); // sifat is moving.
dog.bark(); // sifat says: Woof!
```

`Dog` did not redefine `move`. It just inherited it. In a large project, this saves a lot of repeated code.

---

## Polymorphism

Polymorphism means the same method can behave differently depending on the object. It builds on inheritance but takes it further. You write one interface, and each class decides how to implement it.

```typescript
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => console.log(shape.area()));
// 78.53...
// 24
```

The loop does not care what kind of shape it is. It just calls `area()` and each class handles it its own way. This is powerful in large apps where you deal with many variations of the same concept.

---

## Abstraction

Abstraction means defining a structure without the full implementation. You set the rules, and each class that follows must fill in the details. In TypeScript, you do this with abstract classes or interfaces.

```typescript
abstract class Notification {
  abstract send(message: string): void;

  log(message: string): void {
    console.log(`Logging: ${message}`);
  }
}

class EmailNotification extends Notification {
  send(message: string): void {
    console.log(`Sending email: ${message}`);
  }
}

class SMSNotification extends Notification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

const notifier: Notification = new EmailNotification();
notifier.send("Your order is confirmed.");
notifier.log("Your order is confirmed.");
```

The `Notification` class defines what must exist — a `send` method — but does not say how. Every notification type handles that itself. In a real app, you could add push notifications, Slack messages, or anything else without touching the original class.

---

## Conclusion

These four pillars are not just theory. In a large TypeScript project, Encapsulation stops data from being changed in unexpected ways. Inheritance removes repeated code. Polymorphism lets you write flexible logic that works across many types. And Abstraction gives your team a clear contract to follow.

Together, they make code easier to read, easier to change, and much easier to scale.