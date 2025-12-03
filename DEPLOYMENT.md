# HIRU Consumer Products - Deployment Guide

## 🌐 How to Make Your Website Live

### Option 1: GitHub Pages (FREE & Easy)

1. **Create a GitHub Account**
   - Go to https://github.com
   - Sign up for a free account

2. **Create a New Repository**
   - Click "New Repository"
   - Name it: `hiru-website`
   - Make it Public
   - Click "Create Repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your website files
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/hiru-website`

### Option 2: Netlify (FREE with Custom Domain)

1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Sign up for free

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire `hir` folder
   - Wait for deployment (1-2 minutes)
   - Your site is live!

3. **Custom Domain (Optional)**
   - Go to "Domain settings"
   - Add your custom domain (e.g., hiruconsumer.com)
   - Follow DNS setup instructions

### Option 3: Vercel (FREE & Fast)

1. **Visit Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Site is live instantly

### Option 4: Traditional Web Hosting

**Recommended Hosts:**
- Bluehost
- HostGator
- SiteGround
- GoDaddy

**Steps:**
1. Purchase hosting plan
2. Get domain name (hiruconsumer.com)
3. Upload files via FTP/cPanel
4. Point domain to hosting

## 📝 Before Going Live Checklist

### Content Updates
- [ ] Replace all placeholder images with real product photos
- [ ] Update company contact information
- [ ] Add real address, phone, and email
- [ ] Update social media links
- [ ] Review all product descriptions

### Technical Updates
- [ ] Test all links (make sure they work)
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Optimize images (compress for faster loading)

### SEO Optimization
- [ ] Add meta descriptions to all pages
- [ ] Add proper alt text to all images
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Google Analytics

## 🖼️ Image Optimization

**Before uploading:**
1. Resize images to appropriate dimensions:
   - Hero images: 1920x1080px
   - Product images: 800x600px
   - Thumbnails: 400x300px

2. Compress images using:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (Mac)
   - RIOT (Windows)

3. Save as:
   - JPEG for photos (quality 80-90%)
   - PNG for logos and graphics
   - WebP for best compression (modern browsers)

## 📱 Testing Your Website

### Browser Testing
Test on:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (Mac/iOS)
- Microsoft Edge (latest)

### Device Testing
Test on:
- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)

### Performance Testing
1. Google PageSpeed Insights
   - https://pagespeed.web.dev
   - Aim for 90+ score

2. GTmetrix
   - https://gtmetrix.com
   - Check loading speed

## 🔧 Quick Fixes

### Contact Form Not Working?
Add this to your form (replace with your email):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Or use: EmailJS, FormSubmit, or Netlify Forms

### Images Not Loading?
- Check file paths are correct
- Ensure images are in the `assets` folder
- Use relative paths: `assets/image.jpg`

### Animations Not Working?
- Make sure `script.js` is linked correctly
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

## 🎯 SEO Tips

### Add to Each HTML File:
```html
<head>
    <!-- Primary Meta Tags -->
    <meta name="title" content="HIRU Consumer Products - Premium Ceylon Tea & Cinnamon">
    <meta name="description" content="Experience authentic Ceylon Tea and Cinnamon from Sri Lanka. Premium quality, 100% natural products. Healthy Living Starts Here.">
    <meta name="keywords" content="Ceylon Tea, Ceylon Cinnamon, Sri Lankan Tea, Organic Spices">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="HIRU Consumer Products">
    <meta property="og:description" content="Premium Ceylon Tea & Cinnamon from Sri Lanka">
    <meta property="og:image" content="assets/social-share.jpg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="HIRU Consumer Products">
    <meta property="twitter:description" content="Premium Ceylon Tea & Cinnamon from Sri Lanka">
    <meta property="twitter:image" content="assets/social-share.jpg">
</head>
```

## 📊 Analytics Setup

### Google Analytics (FREE)
1. Go to https://analytics.google.com
2. Create account and property
3. Get tracking code
4. Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Keep backups of all files
- [ ] Don't expose sensitive information
- [ ] Validate form inputs
- [ ] Use environment variables for API keys

## 📞 Need Help?

### Free Resources:
- **W3Schools:** https://www.w3schools.com
- **MDN Web Docs:** https://developer.mozilla.org
- **Stack Overflow:** https://stackoverflow.com

### Video Tutorials:
- YouTube: Search "How to deploy website"
- Udemy: Web development courses
- Coursera: Frontend development

## 🎉 Launch Checklist

Final steps before launch:
- [ ] All content reviewed and approved
- [ ] Images optimized and loaded
- [ ] Contact information updated
- [ ] All links tested
- [ ] Mobile responsive checked
- [ ] Cross-browser tested
- [ ] Forms working
- [ ] SSL certificate active
- [ ] Analytics installed
- [ ] Social media links added
- [ ] Backup created

## 🚀 After Launch

1. **Submit to Google**
   - Google Search Console
   - Submit sitemap

2. **Social Media**
   - Share on Facebook
   - Post on Instagram
   - Tweet about launch
   - LinkedIn announcement

3. **Monitor**
   - Check analytics weekly
   - Monitor form submissions
   - Read user feedback
   - Update content regularly

---

**Congratulations! Your website is ready to go live! 🎉**

*For any questions, refer to README.md or search online tutorials.*

**Good luck with your HIRU Consumer Products website!** ✨
