# singleton-decorator
An ES7 decorator that adds singleton behavior to classes.

## Usage
By default, the class will be decorated with the "implicit" style. You can treat the class as if it weren't a singleton but only one instance will ever be created:

```javascript
import singleton from 'singleton-decorator';

@singleton
class Foo {
}

let a = new Foo(),
	b = new Foo(),
	c = Foo();

// a === b === c
```

The above is also equivalent to specifying `@singleton('implicit')`.

You can also decorate classes to use the "explicit" style (i.e. `Foo.getInstance()`):

```javascript
import singleton from 'singleton-decorator';

@singleton('explicit')
class Foo {
}

let a Foo.getInstance(),
	b = Foo.getInstance();

// a === b
```
