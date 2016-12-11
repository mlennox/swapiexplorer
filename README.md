# Star Wars API explorer

## Jest
I can't say I'm liking it much as it uses Jasmine as a stepping-off point, I prefer AVA and TAP. 

I'll stick with it and learn it as it *is* the default and apparently *snapshots* are wonderful.

### Some caveats, pet hates, comments
I don't like Jamsine, and because Jest appears to be a 'better Jasmine' in many ways, I don't much like the API. I have some comments below...

#### Jasmine, globals, bleh...
![Globals! Globals everywhere](./globals.jpg)


#### \__MOCKS\__
I don't really see the point of writing such individual test-specific mocks in a separate file in a separate folder.

It is simple to create a mock by passing in a function

    let mock_fn = () => { /* do something */ }
    let mocked_fn = jest.fn(mock_fn)
    
which seems more logical to me.

I'll admit that perhaps you might want a single mock of some external dependency, but I can see that being outgrown the minute you need a new return value somewhere.

Mocks and stubs are a code smell, and I had the 'cache' tests using them originally to assert against 'toHaveBeenCalled()' but because I was dealing with actual promises I could check in other ways and the mocks have been removed.

#### beforeEach afterEach
Now, I have to admit to usng
  
#### \__TESTS\__
Sorry, I'm 100% convinced these should be placed beside the source they are testing. Having them in a separate folder seems so archaic and wrong-headed.
