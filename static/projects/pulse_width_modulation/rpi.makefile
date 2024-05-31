#
# Makefile
#

CC      := gcc
CFLAGS  := -O3 -Wall -Wextra -Werror

pwmLed: pwmLED.c
${CC} ${CFLAGS} -o $@ $&lt;

clean:
rm -f pwmLed *~
