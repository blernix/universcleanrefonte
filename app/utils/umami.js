export function trackDevisClick(service, page) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('click_devis', { service, page });
  }
}

export function trackContactClick(source) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('click_contact', { source });
  }
}

export function trackPhoneCall(page) {
  if (typeof window !== 'undefined' && window.umami) {
    window.umami.track('click_telephone', { page });
  }
}
