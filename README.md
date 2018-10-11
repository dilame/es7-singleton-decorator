# singleton-decorator
An ES7 decorator that adds singleton behavior to classes. Very tiny and easy-to-use.

## Usage
Decorator accepts no arguments.
The class will be decorated with the "implicit" and "explicit" styles together.
You can treat the class as if it weren't a singleton but only one
instance will ever be created:

```javascript
import singleton from 'singleton-decorator';

@singleton
class Foo {
}

let a = new Foo(),
	b = new Foo(),
	c = Foo();
	d = Foo.getInstance();

// a === b === c === d
```
