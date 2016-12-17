// app code here...
class App {
    private title: string;
    constructor(title: string) {
        this.title = title;
     }

    public init() {
        // jQuery available
        $('body').html(`${this.title} is running...`)
    }
}
new App('Demo App').init();
