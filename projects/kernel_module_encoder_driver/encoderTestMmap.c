//
//  encoderTestMmap.c
//
//  Test program for encoder device driver
//

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;stdint.h&gt;
#include &lt;string.h&gt;
#include &lt;locale.h&gt;
#include &lt;errno.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;unistd.h&gt;
#include &lt;sys/mman.h&gt;

#include "encoderDriver.h"

//====================================================================

//static const char device_name[] = "/dev/encoderDriver";
static const char device_name[] = "/dev/encoder";

struct {
  EncoderInfo *ep;
  int fd;
} g;

static void
openEncoderDevice(void)
{
  if ((g.fd = open(device_name, O_RDONLY)) &lt; 0) {
    fprintf(stderr, "Cannot open {%s}: %s\n", device_name, strerror(errno));
    exit(1);
  }
}

static void
mmapEncoderDevice(void)
{
  g.ep = mmap(0, 4096, PROT_READ, MAP_SHARED, g.fd, 0);
  if (g.ep == MAP_FAILED) {
    fprintf(stderr, "mmap failed for %s: %s\n", device_name, strerror(errno));
    exit(1);
  }
}

static void
printEncoderInfo(void)
{
  static int lastA;
  static int lastB;

  if ((g.ep-&gt;encoderCountA == lastA) &&
      (g.ep-&gt;encoderCountB == lastB)) {
    return;
  }
	    
  char buf[64];
  sprintf(buf, "%d %d\n",
	  g.ep-&gt;encoderCountA,
		   g.ep-&gt;encoderCountB);
  write(1, buf, strlen(buf));
  lastA = g.ep-&gt;encoderCountA;
  lastB = g.ep-&gt;encoderCountB;
}

int
main(void)
{
  setlocale(LC_ALL, "");
  openEncoderDevice();
  mmapEncoderDevice();
  fprintf(stderr, "Magic=0x%08x\n", g.ep-&gt;magic);
  fprintf(stderr, "Version=%d\n", g.ep-&gt;version);
  for (int i = 0; i &lt; 1000000; ++i) {
    printEncoderInfo();
    usleep(100000);
  }
  munmap(g.ep, 4096);
  close(g.fd);
  return 0;
}
