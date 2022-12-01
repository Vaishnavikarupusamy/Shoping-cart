function handle_changeItemQuantity() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    this.value = math.floor(this.value); //to keep in integer

    update();
}
