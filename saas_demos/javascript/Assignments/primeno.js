function prime() {
    for (let i = 2; i <= 30; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(i);
        }
    }
}
prime();