// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

function SEO({
  title = "AOA (Art of Azyl) | Pencil Portraits & Murals by Azile Ngcwembe",
  description = "AOA (Art of Azyl) is a South African creative brand by Azile Ngcwembe, specialising in pencil portraits, murals, canvas paintings, and graphic design.",
  keywords = "pencil portraits South Africa, mural artist, AOA Craft, Azile Ngcwembe, canvas paintings, graphic design, art commissions Cape Town",
  image = "https://artofazyl.co.za/og-image.png",
  url = "https://artofazyl.co.za",
  type = "website",
  publishedTime = null,
  modifiedTime = null
}) {
  // Clean description (remove special characters that might break JSON)
  const cleanDescription = description.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
  
  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Azile Ngcwembe" />
      <meta name="robots" content="index, follow" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph (WhatsApp, Facebook previews) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Artwork by Azile Ngcwembe - AOA Craft" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AOA (Art of Azyl)" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter/X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Artwork by Azile Ngcwembe - AOA Craft" />
      <meta name="twitter:site" content="@artofazyl" />
      <meta name="twitter:creator" content="@artofazyl" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Alternate language versions (if you add other languages later) */}
      {/* <link rel="alternate" href={url} hrefLang="en" /> */}
      
      {/* Article specific meta tags (for blog posts) */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Schema.org structured data — helps Google show rich results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Art of Azyl",
          "alternateName": "AOA Craft",
          "founder": {
            "@type": "Person",
            "name": "Azile Ngcwembe"
          },
          "description": cleanDescription,
          "url": url,
          "telephone": "+27719983777",
          "email": "artofazyl@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ZA"
          },
          "sameAs": [
            "https://www.instagram.com/artofazyl",
            "https://www.tiktok.com/@artofazyl_",
            "https://www.facebook.com/AzileRhoyiNgcwembe",
            "https://www.linkedin.com/in/artofazyl"
          ],
          "image": image,
          "priceRange": "R800 - R15,000",
          "areaServed": {
            "@type": "Country",
            "name": "South Africa"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Art Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pencil Portraits",
                  "description": "Custom pencil portraits from photos"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Murals",
                  "description": "Large-scale murals for homes and businesses"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Canvas Paintings",
                  "description": "Custom canvas paintings tailored to your style"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Art Lessons",
                  "description": "Art lessons for children"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Graphic Design",
                  "description": "Digital illustration and graphic design"
                }
              }
            ]
          }
        })}
      </script>
      
      {/* WebPage Schema (for better SEO) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": cleanDescription,
          "url": url,
          "isPartOf": {
            "@type": "WebSite",
            "name": "AOA Craft",
            "url": "https://artofazyl.co.za"
          }
        })}
      </script>
    </Helmet>
  );
}

export default SEO;