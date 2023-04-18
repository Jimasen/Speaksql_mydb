#include <stdio.h>

void print_jim(void) {
    printf("This are the correct names:\n...........................\n");
}

void print_dave(void) {
    char str[] = "Teryila";
    str[3] = 'h';
    char str2[] = "Ahura";
    str2[3] = 'l';
    printf("%s,\n%s\n", str, str2);
}

int main(void) {
    print_jim();
    print_dave();
    return 0;
}
