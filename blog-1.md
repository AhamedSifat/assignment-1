# TypeScript: Why `any` is Dangerous and `unknown` is Safer

## Introduction

In TypeScript, `any` and `unknown` both handle unpredictable data. But `any` breaks type safety, while `unknown` keeps it. Let's see why this matters.

---

## Body

### ❌ The Problem with `any`

When you use `any`, TypeScript stops checking. No errors — but your app can crash at runtime.

```typescript
let data: any = "hello";
data.toFixed(2); // No error shown — but crashes at runtime!
```

TypeScript trusts you blindly. That is the hole.

---

### Why `unknown` is Safer

`unknown` says: "I don't know the type yet so check it first."

```typescript
let data: unknown = "hello sifat";
data.toFixed(2); //error — TypeScript forces you to check!
```

You cannot use `unknown` until you confirm what type it is. This protects you.

---

###  Type Narrowing

Type narrowing means checking the type inside your code so TypeScript knows what it is.

```typescript
function processvlaue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); //  TypeScript knows it's a string
  } else if (typeof value === "number") {
    console.log(value.toFixed(2)); // TypeScript knows it's a number
  }
}
```

You narrow the type using `typeof`, `instanceof`, or a custom check.

---

## Conclusion

| | `any` | `unknown` |
|---|---|---|
| Type checked? |  No | Yes |
| Safe to use? |  No |  Yes |
| Needs narrowing? | No | Yes |
