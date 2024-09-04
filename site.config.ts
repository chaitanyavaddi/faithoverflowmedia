import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '55dc0de163b7492089dd382c7e5f96a0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'FaithOverflow',
  domain: 'faithoverflow.com',
  author: 'Joy Stephen',
  seotitle: 'A Christian Blog',

  // open graph metadata (optional)
  description: 'Christ Died For Your Sins - Join us as we explain this Truth for the rest of our lives',

  // social usernames (optional)
  // twitter: 'jotzilla',
  // github: 'verfasor',
  // linkedin: 'faithoverflow',
  // newsletter: '#', // optional newsletter URL
  youtube: 'channel/UCFA3KrOL8_uDK0I6kky0Uvg', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://i.imgur.com/wZ0Cqde.png',
  defaultPageCover: 'https://wr8.in/page-cover.jpg',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Blog',
      pageId: '3d50e0f234ba44418e241d5a526135bc'
    },    
    {
      title: 'About',
      pageId: '99c01c6cce2f4f2a8292dce814e68183'
    },
    {
      title: 'Contact',
      pageId: '6bb77517e47d4ad49554d1e9afdb120c'
    }
  ]
})
