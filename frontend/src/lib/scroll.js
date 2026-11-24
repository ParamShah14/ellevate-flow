let lenisInstance = null;

export const setLenis = (l) => {
  lenisInstance = l;
};

export const scrollTop = () => {
  if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -90, duration: 1.4 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const contactHref = (plan, intent = "project") =>
  `/contact?${new URLSearchParams({ ...(plan ? { plan } : {}), intent }).toString()}`;
