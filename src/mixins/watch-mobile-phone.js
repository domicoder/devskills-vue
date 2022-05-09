export const WatchMobilePhone = {
  data() {
    return {
      isMobileWatchingIt: false,
      innerWidth: 0,
      innerHeight: 0,
    };
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    onResize() {
      this.isMobileWatchingIt = window.innerWidth < 600;
      this.innerWidth = window.innerWidth;
      this.innerHeight = window.innerHeight;
    },
  },
};
