// fonction burger menu / header

function hideShowMenu() {
	var x = document.querySelector('.menu');
  if (x.style.display == "none")
  { x.style.display = "block";
	}
    else
  { x.style.display = "none";
	}
}

document.querySelector('.menu').style.display='none';

// fonction affichage actus Geekzone

data = {
    "version": "https://jsonfeed.org/version/1.1",
    "user_comment": "This feed allows you to read the posts from this site in any feed reader that supports the JSON Feed format. To add this feed to your reader, copy the following URL -- https://www.geekzone.fr/category/web/feed/json -- and add it your reader.",
    "home_page_url": "https://www.geekzone.fr/category/web",
    "feed_url": "https://www.geekzone.fr/category/web/feed/json",
    "language": "fr-FR",
    "title": "Web &#8211; Geekzone",
    "icon": "https://www.geekzone.fr/wp-content/uploads/2015/07/Geekzone_sigle_500x500_carre.png",
    "items": [
        {
            "id": "https://www.geekzone.fr/?p=23571",
            "url": "https://www.geekzone.fr/2020/03/11/firefox-74-est-disponible-petite-revue-des-nouveautes/",
            "title": "Firefox 74 est disponible : petite revue des nouveaut\u00e9s",
            "content_html": "<p>Vous connaissez notre tendance au pros\u00e9lytisme sur Geekzone quand il s&#8217;agit de parler de Firefox. Mais c&#8217;est pour votre bien ! Quand je vois les parts de march\u00e9 que se paie encore cette horreur de Chrome&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2020/03/11/firefox-74-est-disponible-petite-revue-des-nouveautes/\">Firefox 74 est disponible : petite revue des nouveaut\u00e9s</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous connaissez notre tendance au pros\u00e9lytisme sur Geekzone quand il s&#8217;agit de parler de Firefox. Mais c&#8217;est pour votre bien ! Quand je vois les parts de march\u00e9 que se paie encore cette horreur de Chrome&#46;&#46;&#46;\nLisez plut\u00f4t Firefox 74 est disponible : petite revue des nouveaut\u00e9s avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2020-03-11T11:56:12+01:00",
            "date_modified": "2020-03-11T11:56:12+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2020/03/browser-773217_1280.jpg",
            "tags": [
                "browser",
                "firefox",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=23496",
            "url": "https://www.geekzone.fr/2020/02/25/notion-le-meilleur-gestionnaire-de-matiere-grise/",
            "title": "Notion, le meilleur gestionnaire de mati\u00e8re grise",
            "content_html": "<p>Notion est souvent compar\u00e9 \u00e0 d&#8217;autres produits Web ou apps du march\u00e9. C&#8217;est une erreur. Certains services comme AirTable, qui a eu le m\u00e9rite de remettre \u00e0 la mode les bases de donn\u00e9es \u00ab\u00a0pour tous\u00a0\u00bb, partagent&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2020/02/25/notion-le-meilleur-gestionnaire-de-matiere-grise/\">Notion, le meilleur gestionnaire de mati\u00e8re grise</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Notion est souvent compar\u00e9 \u00e0 d&#8217;autres produits Web ou apps du march\u00e9. C&#8217;est une erreur. Certains services comme AirTable, qui a eu le m\u00e9rite de remettre \u00e0 la mode les bases de donn\u00e9es \u00ab\u00a0pour tous\u00a0\u00bb, partagent&#46;&#46;&#46;\nLisez plut\u00f4t Notion, le meilleur gestionnaire de mati\u00e8re grise avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2020-02-25T16:29:55+01:00",
            "date_modified": "2020-02-27T11:12:34+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2020/02/Notion-Banner.jpg",
            "tags": [
                "productivit\u00e9",
                "A la une",
                "Dossiers",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=23060",
            "url": "https://www.geekzone.fr/2019/12/30/google-veut-il-la-peau-du-logiciel-libre/",
            "title": "Google veut-il la peau du logiciel libre ?",
            "content_html": "<p>Qu&#8217;elle est loin l&#8217;\u00e9poque du \u00ab\u00a0don&#8217;t be evil\u00a0\u00bb ! On vous le r\u00e9p\u00e8te \u00e0 l&#8217;envi, que ce soit sur le site ou dans Torr\u00e9faction : il est grand temps d&#8217;en finir avec les produits Google. Qu&#8217;il&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/12/30/google-veut-il-la-peau-du-logiciel-libre/\">Google veut-il la peau du logiciel libre ?</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Qu&#8217;elle est loin l&#8217;\u00e9poque du \u00ab\u00a0don&#8217;t be evil\u00a0\u00bb ! On vous le r\u00e9p\u00e8te \u00e0 l&#8217;envi, que ce soit sur le site ou dans Torr\u00e9faction : il est grand temps d&#8217;en finir avec les produits Google. Qu&#8217;il&#46;&#46;&#46;\nLisez plut\u00f4t Google veut-il la peau du logiciel libre ? avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-12-30T13:08:15+01:00",
            "date_modified": "2020-01-05T20:30:59+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/12/google_01.jpg",
            "tags": [
                "evil corp",
                "google",
                "A la une",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=23087",
            "url": "https://www.geekzone.fr/2019/12/23/zenkit-se-met-au-wiki/",
            "title": "Zenkit se met au wiki",
            "content_html": "<p>On parle r\u00e9guli\u00e8rement de Zenkit, la solution de gestion de t\u00e2ches / projets qui a du mal \u00e0 se faire une place au soleil. Con\u00e7u en Allemagne, ce produit doit jouer des coudes avec des concurrents&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/12/23/zenkit-se-met-au-wiki/\">Zenkit se met au wiki</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On parle r\u00e9guli\u00e8rement de Zenkit, la solution de gestion de t\u00e2ches / projets qui a du mal \u00e0 se faire une place au soleil. Con\u00e7u en Allemagne, ce produit doit jouer des coudes avec des concurrents&#46;&#46;&#46;\nLisez plut\u00f4t Zenkit se met au wiki avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-12-23T12:49:58+01:00",
            "date_modified": "2019-12-23T12:49:58+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/12/zenkit-wiki-view-rounded.jpg",
            "tags": [
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=23063",
            "url": "https://www.geekzone.fr/2019/12/18/bayday-la-plateforme-qui-veut-secouer-le-monde-de-la-bd/",
            "title": "BayDay, la plateforme qui veut secouer le monde de la BD",
            "content_html": "<p>Cr\u00e9ateur de Miraculous Ladybug, Thomas Astruc n&#8217;est visiblement pas au courant que les journ\u00e9es ne font que 24h. Depuis plusieurs mois, il travaille avec une petite \u00e9quipe sur une id\u00e9e simple, mais horriblement compliqu\u00e9e \u00e0 mettre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/12/18/bayday-la-plateforme-qui-veut-secouer-le-monde-de-la-bd/\">BayDay, la plateforme qui veut secouer le monde de la BD</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Cr\u00e9ateur de Miraculous Ladybug, Thomas Astruc n&#8217;est visiblement pas au courant que les journ\u00e9es ne font que 24h. Depuis plusieurs mois, il travaille avec une petite \u00e9quipe sur une id\u00e9e simple, mais horriblement compliqu\u00e9e \u00e0 mettre&#46;&#46;&#46;\nLisez plut\u00f4t BayDay, la plateforme qui veut secouer le monde de la BD avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-12-18T16:42:51+01:00",
            "date_modified": "2019-12-20T11:46:57+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/12/Baday-Boutique.jpg",
            "tags": [
                "bande dessin\u00e9e",
                "A la une",
                "Business",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22908",
            "url": "https://www.geekzone.fr/2019/11/22/redirect-amp-to-html-lextension-de-navigateur-pour-se-passer-damp/",
            "title": "Redirect AMP to HTML : l\u2019extension de navigateur pour se passer d\u2019AMP",
            "content_html": "<p>On vous en parlait notamment dans cet \u00e9pisode de Torr\u00e9faction, chez Geekzone, on n&#8217;aime pas trop AMP. Acronyme d&#8217;Accelerated Mobile Pages, ce framework d\u00e9velopp\u00e9 par Google a pour vocation annonc\u00e9e d&#8217;acc\u00e9l\u00e9rer l&#8217;affichage des pages web sur&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/11/22/redirect-amp-to-html-lextension-de-navigateur-pour-se-passer-damp/\">Redirect AMP to HTML : l&rsquo;extension de navigateur pour se passer d&rsquo;AMP</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On vous en parlait notamment dans cet \u00e9pisode de Torr\u00e9faction, chez Geekzone, on n&#8217;aime pas trop AMP. Acronyme d&#8217;Accelerated Mobile Pages, ce framework d\u00e9velopp\u00e9 par Google a pour vocation annonc\u00e9e d&#8217;acc\u00e9l\u00e9rer l&#8217;affichage des pages web sur&#46;&#46;&#46;\nLisez plut\u00f4t Redirect AMP to HTML : l&rsquo;extension de navigateur pour se passer d&rsquo;AMP avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-11-22T12:14:38+01:00",
            "date_modified": "2019-11-22T12:24:31+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/11/amp_01.jpg",
            "tags": [
                "chrome",
                "extension",
                "firefox",
                "google",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22788",
            "url": "https://www.geekzone.fr/2019/10/29/ghost-30-concurrent-wordpress/",
            "title": "Ghost 3.0 : parce qu\u2019il n\u2019y a pas que WordPress dans la vie !",
            "content_html": "<p>On en parlait dans le dernier Torr\u00e9faction : l&#8217;outil de publication (CMS) open source Ghost d\u00e9barque dans une version 3.0. Elle met l&#8217;accent sur le point crucial de tout scribouillard qui se bat avec son clavier&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/10/29/ghost-30-concurrent-wordpress/\">Ghost 3.0 : parce qu&rsquo;il n&rsquo;y a pas que WordPress dans la vie !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On en parlait dans le dernier Torr\u00e9faction : l&#8217;outil de publication (CMS) open source Ghost d\u00e9barque dans une version 3.0. Elle met l&#8217;accent sur le point crucial de tout scribouillard qui se bat avec son clavier&#46;&#46;&#46;\nLisez plut\u00f4t Ghost 3.0 : parce qu&rsquo;il n&rsquo;y a pas que WordPress dans la vie ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-10-29T17:58:47+01:00",
            "date_modified": "2019-11-13T03:12:22+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/10/Ghost-3.0.jpg",
            "tags": [
                "outil",
                "Web",
                "A la une",
                "Softs &amp; Apps"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22742",
            "url": "https://www.geekzone.fr/2019/10/23/quartex-media-desktop-enfin-un-os-decent-pour-nos-routeurs-nas-et-plus/",
            "title": "Quartex Media Desktop : enfin un OS d\u00e9cent pour nos routeurs, NAS et plus\u00a0?",
            "content_html": "<p>Quartex Media Desktop (QTXMD) est un projet ambitieux men\u00e9 par un d\u00e9veloppeur fan d&#8217;AmigaOS, nomm\u00e9 Jon L. Aasenden. Souvent controvers\u00e9 parce qu&#8217;il n&#8217;est pas du genre \u00e0 garder sa langue dans sa poche, cet homme a&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/10/23/quartex-media-desktop-enfin-un-os-decent-pour-nos-routeurs-nas-et-plus/\">Quartex Media Desktop : enfin un OS d\u00e9cent pour nos routeurs, NAS et plus&nbsp;?</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Quartex Media Desktop (QTXMD) est un projet ambitieux men\u00e9 par un d\u00e9veloppeur fan d&#8217;AmigaOS, nomm\u00e9 Jon L. Aasenden. Souvent controvers\u00e9 parce qu&#8217;il n&#8217;est pas du genre \u00e0 garder sa langue dans sa poche, cet homme a&#46;&#46;&#46;\nLisez plut\u00f4t Quartex Media Desktop : enfin un OS d\u00e9cent pour nos routeurs, NAS et plus&nbsp;? avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-10-23T09:00:50+02:00",
            "date_modified": "2019-11-13T03:12:31+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/10/Quartex-Media-Desktop.jpg",
            "tags": [
                "d\u00e9veloppement",
                "\u00e9mulation",
                "Web",
                "A la une",
                "Softs &amp; Apps",
                "Tech"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22583",
            "url": "https://www.geekzone.fr/2019/10/09/unogs-un-moteur-de-recherche-global-pour-netflix/",
            "title": "uNoGS, un moteur de recherche global pour Netflix",
            "content_html": "<p>Apr\u00e8s Flixable, qu&#8217;on vous avait fait d\u00e9couvrir l&#8217;ann\u00e9e derni\u00e8re, voici un nouvel outil bien pratique pour pallier les fonctionnalit\u00e9s manquantes de Netflix : le curieusement nomm\u00e9 uNoGS. uNoGS, qui signifie \u00ab\u00a0unofficial Netflix online Global Search\u00a0\u00bb, permet&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/10/09/unogs-un-moteur-de-recherche-global-pour-netflix/\">uNoGS, un moteur de recherche global pour Netflix</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s Flixable, qu&#8217;on vous avait fait d\u00e9couvrir l&#8217;ann\u00e9e derni\u00e8re, voici un nouvel outil bien pratique pour pallier les fonctionnalit\u00e9s manquantes de Netflix : le curieusement nomm\u00e9 uNoGS. uNoGS, qui signifie \u00ab\u00a0unofficial Netflix online Global Search\u00a0\u00bb, permet&#46;&#46;&#46;\nLisez plut\u00f4t uNoGS, un moteur de recherche global pour Netflix avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-10-09T12:01:45+02:00",
            "date_modified": "2019-10-09T12:49:54+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/10/unogs_01.jpg",
            "tags": [
                "netflix",
                "utilitaires",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22466",
            "url": "https://www.geekzone.fr/2019/09/18/faux-adblock-ublock-google-chrome/",
            "title": "Attention aux faux adblocks pour Google Chrome !",
            "content_html": "<p>Les petits gars de chez AdGuard, dont je dis le plus grand bien tr\u00e8s r\u00e9guli\u00e8rement, viennent de publier un post de blog pour mettre en lumi\u00e8re plusieurs faux adblocks toujours disponibles sur le Chrome Web Store.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/09/18/faux-adblock-ublock-google-chrome/\">Attention aux faux adblocks pour Google Chrome !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Les petits gars de chez AdGuard, dont je dis le plus grand bien tr\u00e8s r\u00e9guli\u00e8rement, viennent de publier un post de blog pour mettre en lumi\u00e8re plusieurs faux adblocks toujours disponibles sur le Chrome Web Store.&#46;&#46;&#46;\nLisez plut\u00f4t Attention aux faux adblocks pour Google Chrome ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-09-18T11:21:51+02:00",
            "date_modified": "2019-09-18T11:21:51+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/09/Faux-Adblock-Google-Chrome-Banner.jpg",
            "tags": [
                "chrome",
                "extension",
                "s\u00e9curit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22398",
            "url": "https://www.geekzone.fr/2019/09/09/onetab-transformez-vos-onglets-en-listes-sur-chrome-et-firefox/",
            "title": "OneTab : transformez vos onglets en listes sur Chrome et Firefox",
            "content_html": "<p>Si vous \u00eates du genre \u00e0 ouvrir douze trillions d&#8217;onglets dans votre navigateur, voici une petite extension qui devrait vous aider \u00e0 y voir plus clair : OneTab. Le principe de OneTab est archisimple : un&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/09/09/onetab-transformez-vos-onglets-en-listes-sur-chrome-et-firefox/\">OneTab : transformez vos onglets en listes sur Chrome et Firefox</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si vous \u00eates du genre \u00e0 ouvrir douze trillions d&#8217;onglets dans votre navigateur, voici une petite extension qui devrait vous aider \u00e0 y voir plus clair : OneTab. Le principe de OneTab est archisimple : un&#46;&#46;&#46;\nLisez plut\u00f4t OneTab : transformez vos onglets en listes sur Chrome et Firefox avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-09-09T13:35:42+02:00",
            "date_modified": "2019-09-09T13:35:42+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/09/onetab_01.jpg",
            "tags": [
                "chrome",
                "extension",
                "firefox",
                "navigateur",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22406",
            "url": "https://www.geekzone.fr/2019/09/06/apple-music-decouvre-le-web/",
            "title": "Apple Music d\u00e9couvre le Web",
            "content_html": "<p>Apr\u00e8s les initiatives du type Musish, qui se basaient sur les API Apple, on attendait que le g\u00e9ant se rappelle que le Web, c&#8217;est quand m\u00eame assez pratique. C&#8217;est enfin le cas avec cette b\u00eata officielle&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/09/06/apple-music-decouvre-le-web/\">Apple Music d\u00e9couvre le Web</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s les initiatives du type Musish, qui se basaient sur les API Apple, on attendait que le g\u00e9ant se rappelle que le Web, c&#8217;est quand m\u00eame assez pratique. C&#8217;est enfin le cas avec cette b\u00eata officielle&#46;&#46;&#46;\nLisez plut\u00f4t Apple Music d\u00e9couvre le Web avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-09-06T17:38:24+02:00",
            "date_modified": "2019-09-06T17:40:43+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/09/Apple-music-Web-vs-Catalina.png",
            "tags": [
                "apple",
                "musique",
                "streaming",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22337",
            "url": "https://www.geekzone.fr/2019/08/30/goodtwitter-forcer-twitter-a-revenir-a-son-ancien-design/",
            "title": "GoodTwitter : forcez Twitter \u00e0 revenir \u00e0 son ancien design",
            "content_html": "<p>Vous n&#8217;aimez pas le nouveau design de Twitter ? Rassurez-vous, vous \u00eates loin d&#8217;\u00eatre le seul. Heureusement, gr\u00e2ce \u00e0 l&#8217;extension GoodTwitter, vous pouvez revenir \u00e0 l&#8217;ancien look tr\u00e8s simplement. Disponible pour FF et Chrome, GoodTwitter est&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/30/goodtwitter-forcer-twitter-a-revenir-a-son-ancien-design/\">GoodTwitter : forcez Twitter \u00e0 revenir \u00e0 son ancien design</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous n&#8217;aimez pas le nouveau design de Twitter ? Rassurez-vous, vous \u00eates loin d&#8217;\u00eatre le seul. Heureusement, gr\u00e2ce \u00e0 l&#8217;extension GoodTwitter, vous pouvez revenir \u00e0 l&#8217;ancien look tr\u00e8s simplement. Disponible pour FF et Chrome, GoodTwitter est&#46;&#46;&#46;\nLisez plut\u00f4t GoodTwitter : forcez Twitter \u00e0 revenir \u00e0 son ancien design avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-30T12:50:22+02:00",
            "date_modified": "2019-08-30T12:50:55+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/goodtwitter_02.jpg",
            "tags": [
                "chrome",
                "extension",
                "firefox",
                "twitter",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22285",
            "url": "https://www.geekzone.fr/2019/08/27/youtube-decade-decouvrez-les-videos-les-plus-vues-sur-youtube-il-y-a-10-ans/",
            "title": "YouTube Decade : d\u00e9couvrez les vid\u00e9os les plus vues sur YouTube\u2026 il y a 10 ans !",
            "content_html": "<p>Je ne sais pas pour vous, mais moi, je suis en train de fondre sous les toits. Corolaire : l&#8217;envie de bosser n&#8217;est pas v\u00e9ritablement pr\u00e9sente. J&#8217;arpente donc le Net \u00e0 la recherche de nouvelles mani\u00e8res&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/27/youtube-decade-decouvrez-les-videos-les-plus-vues-sur-youtube-il-y-a-10-ans/\">YouTube Decade : d\u00e9couvrez les vid\u00e9os les plus vues sur YouTube&#8230; il y a 10 ans !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je ne sais pas pour vous, mais moi, je suis en train de fondre sous les toits. Corolaire : l&#8217;envie de bosser n&#8217;est pas v\u00e9ritablement pr\u00e9sente. J&#8217;arpente donc le Net \u00e0 la recherche de nouvelles mani\u00e8res&#46;&#46;&#46;\nLisez plut\u00f4t YouTube Decade : d\u00e9couvrez les vid\u00e9os les plus vues sur YouTube&#8230; il y a 10 ans ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-27T16:43:07+02:00",
            "date_modified": "2019-08-27T16:43:39+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/youtube_decade.jpg",
            "tags": [
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22265",
            "url": "https://www.geekzone.fr/2019/08/22/bonjourr-une-page-de-demarrage-minimaliste-et-sexy-pour-votre-browser/",
            "title": "Bonjourr, une page de d\u00e9marrage minimaliste et sexy pour votre browser",
            "content_html": "<p>Inspir\u00e9e d&#8217;iOS et d\u00e9velopp\u00e9e par des petits Frenchies, Bonjourr est une page de d\u00e9marrage personnalisable pour votre navigateur. Disponible pour Chrome, Firefox et Safari, l&#8217;extension n&#8217;offre qu&#8217;une quantit\u00e9 limit\u00e9e d&#8217;options, mais devrait plaire \u00e0 ceux qui&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/22/bonjourr-une-page-de-demarrage-minimaliste-et-sexy-pour-votre-browser/\">Bonjourr, une page de d\u00e9marrage minimaliste et sexy pour votre browser</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Inspir\u00e9e d&#8217;iOS et d\u00e9velopp\u00e9e par des petits Frenchies, Bonjourr est une page de d\u00e9marrage personnalisable pour votre navigateur. Disponible pour Chrome, Firefox et Safari, l&#8217;extension n&#8217;offre qu&#8217;une quantit\u00e9 limit\u00e9e d&#8217;options, mais devrait plaire \u00e0 ceux qui&#46;&#46;&#46;\nLisez plut\u00f4t Bonjourr, une page de d\u00e9marrage minimaliste et sexy pour votre browser avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-22T13:29:57+02:00",
            "date_modified": "2019-08-22T13:29:57+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/bonjourr_01.jpg",
            "tags": [
                "chrome",
                "extension",
                "firefox",
                "safari",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22187",
            "url": "https://www.geekzone.fr/2019/08/14/awesome-selfhosted-une-liste-bien-fournie-dapplications-libres-a-heberger-soi-meme/",
            "title": "Awesome-Selfhosted : une liste bien fournie d\u2019applications libres \u00e0 h\u00e9berger soi-m\u00eame",
            "content_html": "<p>Avis \u00e0 tous les adeptes du \u00ab\u00a0self-hosting\u00a0\u00bb : si vous \u00eates \u00e0 la recherche de softs libres que vous pouvez h\u00e9berger chez vous, le catalogue Awesome-Selfhosted devrait vous plaire ! G\u00e9r\u00e9 par un certain Kickball et&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/14/awesome-selfhosted-une-liste-bien-fournie-dapplications-libres-a-heberger-soi-meme/\">Awesome-Selfhosted : une liste bien fournie d&rsquo;applications libres \u00e0 h\u00e9berger soi-m\u00eame</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Avis \u00e0 tous les adeptes du \u00ab\u00a0self-hosting\u00a0\u00bb : si vous \u00eates \u00e0 la recherche de softs libres que vous pouvez h\u00e9berger chez vous, le catalogue Awesome-Selfhosted devrait vous plaire ! G\u00e9r\u00e9 par un certain Kickball et&#46;&#46;&#46;\nLisez plut\u00f4t Awesome-Selfhosted : une liste bien fournie d&rsquo;applications libres \u00e0 h\u00e9berger soi-m\u00eame avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-14T13:24:10+02:00",
            "date_modified": "2019-08-14T13:24:10+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/awesomehost_02.jpg",
            "tags": [
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22160",
            "url": "https://www.geekzone.fr/2019/08/09/removebg-supprimez-le-decor-dune-photo-en-quelques-secondes/",
            "title": "RemoveBG : supprimez le d\u00e9cor d\u2019une photo en quelques secondes",
            "content_html": "<p>Si vous n&#8217;avez ni le talent ni la patience de le faire \u00e0 la main dans Photoshop, l&#8217;application en ligne Remove Image Background supprime en quelques secondes le d\u00e9cor de n&#8217;importe quelle photo. Et le r\u00e9sultat&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/09/removebg-supprimez-le-decor-dune-photo-en-quelques-secondes/\">RemoveBG : supprimez le d\u00e9cor d&rsquo;une photo en quelques secondes</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si vous n&#8217;avez ni le talent ni la patience de le faire \u00e0 la main dans Photoshop, l&#8217;application en ligne Remove Image Background supprime en quelques secondes le d\u00e9cor de n&#8217;importe quelle photo. Et le r\u00e9sultat&#46;&#46;&#46;\nLisez plut\u00f4t RemoveBG : supprimez le d\u00e9cor d&rsquo;une photo en quelques secondes avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-09T13:45:49+02:00",
            "date_modified": "2019-08-09T13:45:49+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/removebg_01.jpg",
            "tags": [
                "photographie",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22133",
            "url": "https://www.geekzone.fr/2019/08/02/avec-redacted-masquez-vos-photos-et-captures-decran-en-quelques-clics/",
            "title": "Avec Redacted, masquez vos photos et captures d\u2019\u00e9cran en quelques clics",
            "content_html": "<p>Redacted est un petit outil gratuit permettant d&#8217;\u00e9diter facilement une image pour en masquer les zones sensibles. Besoin de mettre en ligne une image dont vous souhaitez cacher certains \u00e9l\u00e9ments ? Pas de Photoshop ou autre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/02/avec-redacted-masquez-vos-photos-et-captures-decran-en-quelques-clics/\">Avec Redacted, masquez vos photos et captures d&rsquo;\u00e9cran en quelques clics</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Redacted est un petit outil gratuit permettant d&#8217;\u00e9diter facilement une image pour en masquer les zones sensibles. Besoin de mettre en ligne une image dont vous souhaitez cacher certains \u00e9l\u00e9ments ? Pas de Photoshop ou autre&#46;&#46;&#46;\nLisez plut\u00f4t Avec Redacted, masquez vos photos et captures d&rsquo;\u00e9cran en quelques clics avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-02T13:26:01+02:00",
            "date_modified": "2019-08-02T13:59:33+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/redacted_01.jpg",
            "tags": [
                "outil",
                "photographie",
                "vie priv\u00e9e",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22101",
            "url": "https://www.geekzone.fr/2019/08/01/devilution-jouez-a-diablo-dans-votre-browser/",
            "title": "Devilution : jouez \u00e0 Diablo dans votre browser !",
            "content_html": "<p>Si l&#8217;envie de bosser n&#8217;est pas au rendez-vous aujourd&#8217;hui, j&#8217;ai une proposition ludique \u00e0 vous faire : que diriez-vous de vous replonger dans le premier Diablo, en le planquant discr\u00e8tement dans un onglet de votre navigateur&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/08/01/devilution-jouez-a-diablo-dans-votre-browser/\">Devilution : jouez \u00e0 Diablo dans votre browser !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si l&#8217;envie de bosser n&#8217;est pas au rendez-vous aujourd&#8217;hui, j&#8217;ai une proposition ludique \u00e0 vous faire : que diriez-vous de vous replonger dans le premier Diablo, en le planquant discr\u00e8tement dans un onglet de votre navigateur&#46;&#46;&#46;\nLisez plut\u00f4t Devilution : jouez \u00e0 Diablo dans votre browser ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-08-01T12:13:07+02:00",
            "date_modified": "2019-08-02T12:05:23+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/08/diablo_01.jpg",
            "tags": [
                "jeux vid\u00e9o",
                "Gaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22104",
            "url": "https://www.geekzone.fr/2019/07/31/noclip-decortique-hitman/",
            "title": "NoClip d\u00e9cortique Hitman",
            "content_html": "<p>C&#8217;est l&#8217;\u00e9t\u00e9 et vous avez un peu de temps ? Posez-vous pour regarder les derniers documentaires de NoClip ! Consacr\u00e9s \u00e0 IO Interactive et \u00e0 la s\u00e9rie Hitman, c&#8217;est encore une fois du caviar pour tous&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/31/noclip-decortique-hitman/\">NoClip d\u00e9cortique Hitman</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est l&#8217;\u00e9t\u00e9 et vous avez un peu de temps ? Posez-vous pour regarder les derniers documentaires de NoClip ! Consacr\u00e9s \u00e0 IO Interactive et \u00e0 la s\u00e9rie Hitman, c&#8217;est encore une fois du caviar pour tous&#46;&#46;&#46;\nLisez plut\u00f4t NoClip d\u00e9cortique Hitman avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-31T17:53:11+02:00",
            "date_modified": "2019-07-31T17:56:39+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/Hitman-2.jpg",
            "tags": [
                "documentaire",
                "jeux vid\u00e9o",
                "Gaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22091",
            "url": "https://www.geekzone.fr/2019/07/30/copychar-tous-les-caracteres-speciaux-a-portee-de-clic/",
            "title": "CopyChar : tous les caract\u00e8res sp\u00e9ciaux \u00e0 port\u00e9e de clic",
            "content_html": "<p>On a beau profiter aujourd&#8217;hui d&#8217;OS modernes qui int\u00e8grent la gestion des caract\u00e8res sp\u00e9ciaux et autres emojis, il peut parfois s&#8217;av\u00e9rer utile d&#8217;y avoir \u00e9galement acc\u00e8s via un outil web, disponible partout. C&#8217;est l&#8217;objectif de CopyChar.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/30/copychar-tous-les-caracteres-speciaux-a-portee-de-clic/\">CopyChar : tous les caract\u00e8res sp\u00e9ciaux \u00e0 port\u00e9e de clic</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On a beau profiter aujourd&#8217;hui d&#8217;OS modernes qui int\u00e8grent la gestion des caract\u00e8res sp\u00e9ciaux et autres emojis, il peut parfois s&#8217;av\u00e9rer utile d&#8217;y avoir \u00e9galement acc\u00e8s via un outil web, disponible partout. C&#8217;est l&#8217;objectif de CopyChar.&#46;&#46;&#46;\nLisez plut\u00f4t CopyChar : tous les caract\u00e8res sp\u00e9ciaux \u00e0 port\u00e9e de clic avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-30T16:29:46+02:00",
            "date_modified": "2019-07-30T16:29:46+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/copychar_01.jpg",
            "tags": [
                "productivit\u00e9",
                "utilitaires",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22056",
            "url": "https://www.geekzone.fr/2019/07/29/poolside-fm-la-bande-son-de-votre-ete/",
            "title": "Poolside FM : la bande son de votre \u00e9t\u00e9",
            "content_html": "<p>Initialement lanc\u00e9e en 2014, l&#8217;excellente webradio Poolside FM refait aujourd&#8217;hui surface dans l&#8217;actualit\u00e9 suite \u00e0 un relooking plut\u00f4t r\u00e9ussi, et l&#8217;ajout de nouveaux canaux musicaux. Directement inspir\u00e9e du design de macOS (un \u00e9l\u00e9ment qui devrait faire&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/29/poolside-fm-la-bande-son-de-votre-ete/\">Poolside FM : la bande son de votre \u00e9t\u00e9</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Initialement lanc\u00e9e en 2014, l&#8217;excellente webradio Poolside FM refait aujourd&#8217;hui surface dans l&#8217;actualit\u00e9 suite \u00e0 un relooking plut\u00f4t r\u00e9ussi, et l&#8217;ajout de nouveaux canaux musicaux. Directement inspir\u00e9e du design de macOS (un \u00e9l\u00e9ment qui devrait faire&#46;&#46;&#46;\nLisez plut\u00f4t Poolside FM : la bande son de votre \u00e9t\u00e9 avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-29T13:10:42+02:00",
            "date_modified": "2019-07-29T13:10:42+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/poolside_01.jpg",
            "tags": [
                "musique",
                "radio",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22032",
            "url": "https://www.geekzone.fr/2019/07/22/disboard-decouvrez-facilement-de-nouveaux-serveurs-discord/",
            "title": "Disboard : d\u00e9couvrez facilement de nouveaux serveurs Discord",
            "content_html": "<p>Que vous soyez branch\u00e9s gaming, musique, technologie, cin\u00e9ma ou encore mangas, il y a forc\u00e9ment un Discord sur lequel procrastiner qui vous correspond. Et gr\u00e2ce \u00e0 Disboard, il est d\u00e9sormais possible de naviguer ais\u00e9ment dans la&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/22/disboard-decouvrez-facilement-de-nouveaux-serveurs-discord/\">Disboard : d\u00e9couvrez facilement de nouveaux serveurs Discord</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Que vous soyez branch\u00e9s gaming, musique, technologie, cin\u00e9ma ou encore mangas, il y a forc\u00e9ment un Discord sur lequel procrastiner qui vous correspond. Et gr\u00e2ce \u00e0 Disboard, il est d\u00e9sormais possible de naviguer ais\u00e9ment dans la&#46;&#46;&#46;\nLisez plut\u00f4t Disboard : d\u00e9couvrez facilement de nouveaux serveurs Discord avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-22T13:17:26+02:00",
            "date_modified": "2019-07-22T13:17:26+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/disboard_01.jpg",
            "tags": [
                "communication",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22026",
            "url": "https://www.geekzone.fr/2019/07/18/iconsvg-un-outil-en-ligne-pour-rechercher-et-personnaliser-des-icones-dinterface/",
            "title": "ICONSVG : un outil en ligne pour rechercher et personnaliser des ic\u00f4nes d\u2019interface",
            "content_html": "<p>Simple d&#8217;utilisation et gratuit, ICONSVG permet de trouver rapidement les ic\u00f4nes dont vous avez besoin, parmi diff\u00e9rentes cat\u00e9gories (m\u00e9dia, fichiers et dossiers, symboles et formes, etc.). L&#8217;outil vous offre \u00e9galement la possibilit\u00e9 de les \u00e9diter selon&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/18/iconsvg-un-outil-en-ligne-pour-rechercher-et-personnaliser-des-icones-dinterface/\">ICONSVG : un outil en ligne pour rechercher et personnaliser des ic\u00f4nes d&rsquo;interface</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Simple d&#8217;utilisation et gratuit, ICONSVG permet de trouver rapidement les ic\u00f4nes dont vous avez besoin, parmi diff\u00e9rentes cat\u00e9gories (m\u00e9dia, fichiers et dossiers, symboles et formes, etc.). L&#8217;outil vous offre \u00e9galement la possibilit\u00e9 de les \u00e9diter selon&#46;&#46;&#46;\nLisez plut\u00f4t ICONSVG : un outil en ligne pour rechercher et personnaliser des ic\u00f4nes d&rsquo;interface avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-18T12:24:37+02:00",
            "date_modified": "2019-07-18T12:24:37+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/iconsvg.jpg",
            "tags": [
                "design",
                "gratuit",
                "utilitaires",
                "Web",
                "Softs &amp; Apps"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=22018",
            "url": "https://www.geekzone.fr/2019/07/17/voyage-dans-le-temps-revivez-la-mission-apollo-11-en-temps-reel/",
            "title": "Voyage dans le temps : revivez la mission Apollo 11 en temps r\u00e9el",
            "content_html": "<p>Pour f\u00eater les 50 ans de la mission Apollo 11 et du premier pas de l&#8217;homme sur la Lune, la NASA a mis en ligne un site qui permet de revivre l&#8217;\u00e9v\u00e9nement en temps r\u00e9el, comme&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/17/voyage-dans-le-temps-revivez-la-mission-apollo-11-en-temps-reel/\">Voyage dans le temps : revivez la mission Apollo 11 en temps r\u00e9el</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pour f\u00eater les 50 ans de la mission Apollo 11 et du premier pas de l&#8217;homme sur la Lune, la NASA a mis en ligne un site qui permet de revivre l&#8217;\u00e9v\u00e9nement en temps r\u00e9el, comme&#46;&#46;&#46;\nLisez plut\u00f4t Voyage dans le temps : revivez la mission Apollo 11 en temps r\u00e9el avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-17T11:35:40+02:00",
            "date_modified": "2019-07-17T11:35:40+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/apollo11_01.jpg",
            "tags": [
                "espace",
                "nasa",
                "Science",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21980",
            "url": "https://www.geekzone.fr/2019/07/15/le-scenariste-de-black-hawk-down-et-un-illustrateur-darcher-vous-racontent-le-rapport-mueller/",
            "title": "Le sc\u00e9nariste de Black Hawk Down et un illustrateur d\u2019Archer vous racontent le rapport Mueller",
            "content_html": "<p>Ah, le rapport Mueller et ses 448 pages d&#8217;intrigues politiques, de personnages hauts en couleur, de trahisons\u2026 Un document important, indissociable de la Pr\u00e9sidence de Trump, mais que personne n&#8217;a lu. La faute \u00e0 une prose&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/15/le-scenariste-de-black-hawk-down-et-un-illustrateur-darcher-vous-racontent-le-rapport-mueller/\">Le sc\u00e9nariste de Black Hawk Down et un illustrateur d&rsquo;Archer vous racontent le rapport Mueller</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Ah, le rapport Mueller et ses 448 pages d&#8217;intrigues politiques, de personnages hauts en couleur, de trahisons\u2026 Un document important, indissociable de la Pr\u00e9sidence de Trump, mais que personne n&#8217;a lu. La faute \u00e0 une prose&#46;&#46;&#46;\nLisez plut\u00f4t Le sc\u00e9nariste de Black Hawk Down et un illustrateur d&rsquo;Archer vous racontent le rapport Mueller avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-15T12:10:15+02:00",
            "date_modified": "2019-07-15T12:10:15+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/mueller_02.jpg",
            "tags": [
                "illustration",
                "litt\u00e9rature",
                "politique",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21953",
            "url": "https://www.geekzone.fr/2019/07/08/a-dream-cast-celebrez-le-20eme-anniversaire-de-la-dreamcast-de-sega-avec-ce-documentaire-passionnant/",
            "title": "A Dream Cast : c\u00e9l\u00e9brez le 20\u00e8me anniversaire de la Dreamcast de Sega avec ce documentaire passionnant",
            "content_html": "<p>Dans la lign\u00e9e de l&#8217;excellent Ebb and Flow de l&#8217;ann\u00e9e derni\u00e8re, la team d&#8217;Archipel (toco toco) nous livre encore une fois un documentaire (en deux parties) comme seuls eux savent les faire, pour partir \u00e0 la&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/08/a-dream-cast-celebrez-le-20eme-anniversaire-de-la-dreamcast-de-sega-avec-ce-documentaire-passionnant/\">A Dream Cast : c\u00e9l\u00e9brez le 20\u00e8me anniversaire de la Dreamcast de Sega avec ce documentaire passionnant</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Dans la lign\u00e9e de l&#8217;excellent Ebb and Flow de l&#8217;ann\u00e9e derni\u00e8re, la team d&#8217;Archipel (toco toco) nous livre encore une fois un documentaire (en deux parties) comme seuls eux savent les faire, pour partir \u00e0 la&#46;&#46;&#46;\nLisez plut\u00f4t A Dream Cast : c\u00e9l\u00e9brez le 20\u00e8me anniversaire de la Dreamcast de Sega avec ce documentaire passionnant avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-08T15:44:48+02:00",
            "date_modified": "2019-07-12T17:40:32+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/A-Dream-Cast.jpg",
            "tags": [
                "documentaire",
                "r\u00e9trogaming",
                "sega",
                "A la une",
                "Gaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21891",
            "url": "https://www.geekzone.fr/2019/07/04/learning-synths-tout-savoir-sur-les-synthetiseurs-grace-a-ableton/",
            "title": "Learning Synths : tout savoir sur les synth\u00e9tiseurs gr\u00e2ce \u00e0 Ableton",
            "content_html": "<p>Dans un nouveau microsite d\u00e9di\u00e9, les gens d&#8217;Ableton (d\u00e9veloppeurs du c\u00e9l\u00e8bre DAW \u00ab\u00a0Live\u00a0\u00bb) vous proposent une chouette initiation au monde merveilleux des synth\u00e9tiseurs. \u00c7a s&#8217;appelle \u00ab\u00a0Learning Synths\u00a0\u00bb (forc\u00e9ment), c&#8217;est gratuit, et c&#8217;est accessible directement dans votre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/04/learning-synths-tout-savoir-sur-les-synthetiseurs-grace-a-ableton/\">Learning Synths : tout savoir sur les synth\u00e9tiseurs gr\u00e2ce \u00e0 Ableton</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Dans un nouveau microsite d\u00e9di\u00e9, les gens d&#8217;Ableton (d\u00e9veloppeurs du c\u00e9l\u00e8bre DAW \u00ab\u00a0Live\u00a0\u00bb) vous proposent une chouette initiation au monde merveilleux des synth\u00e9tiseurs. \u00c7a s&#8217;appelle \u00ab\u00a0Learning Synths\u00a0\u00bb (forc\u00e9ment), c&#8217;est gratuit, et c&#8217;est accessible directement dans votre&#46;&#46;&#46;\nLisez plut\u00f4t Learning Synths : tout savoir sur les synth\u00e9tiseurs gr\u00e2ce \u00e0 Ableton avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-04T12:41:25+02:00",
            "date_modified": "2019-07-04T13:44:24+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/Screenshot_2019-07-04-Learning-Synths.jpg",
            "tags": [
                "musique",
                "production",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21881",
            "url": "https://www.geekzone.fr/2019/07/01/online-polyhedral-dice-des-des-virtuels-en-ligne/",
            "title": "Online Polyhedral Dice, des d\u00e9s virtuels en ligne",
            "content_html": "<p>C&#8217;est les vacances, il fait chaud, et l&#8217;actu tourne un peu au ralenti. J&#8217;en profite pour vous parler d&#8217;un petit outil rigoureusement inutile, donc indispensable : Online Polyhedral Dice. Comme son nom l&#8217;indique, il s&#8217;agit d&#8217;une&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/07/01/online-polyhedral-dice-des-des-virtuels-en-ligne/\">Online Polyhedral Dice, des d\u00e9s virtuels en ligne</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est les vacances, il fait chaud, et l&#8217;actu tourne un peu au ralenti. J&#8217;en profite pour vous parler d&#8217;un petit outil rigoureusement inutile, donc indispensable : Online Polyhedral Dice. Comme son nom l&#8217;indique, il s&#8217;agit d&#8217;une&#46;&#46;&#46;\nLisez plut\u00f4t Online Polyhedral Dice, des d\u00e9s virtuels en ligne avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-07-01T13:19:56+02:00",
            "date_modified": "2019-07-01T13:19:56+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/07/Screenshot_2019-07-01-Online-Polyhedral-Dice.png",
            "tags": [
                "jeux de plateau",
                "jeux de r\u00f4les",
                "utilitaires",
                "Gaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21744",
            "url": "https://www.geekzone.fr/2019/06/17/generative-fm-de-la-musique-generative-pour-vos-sessions-de-travail-ou-de-detente/",
            "title": "Generative.fm : de la musique g\u00e9n\u00e9rative pour vos sessions de travail ou de d\u00e9tente",
            "content_html": "<p>Pour ceux qui aiment bosser (ou m\u00e9diter) en musique (et qui ont d\u00e9j\u00e0 d\u00e9vor\u00e9 tous les Chill Pill de votre humble serviteur), je vous propose d&#8217;aller piocher vos prochaines atmosph\u00e8res sonores sur l&#8217;excellent Generative.fm. D\u00e9velopp\u00e9 par&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/06/17/generative-fm-de-la-musique-generative-pour-vos-sessions-de-travail-ou-de-detente/\">Generative.fm : de la musique g\u00e9n\u00e9rative pour vos sessions de travail ou de d\u00e9tente</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pour ceux qui aiment bosser (ou m\u00e9diter) en musique (et qui ont d\u00e9j\u00e0 d\u00e9vor\u00e9 tous les Chill Pill de votre humble serviteur), je vous propose d&#8217;aller piocher vos prochaines atmosph\u00e8res sonores sur l&#8217;excellent Generative.fm. D\u00e9velopp\u00e9 par&#46;&#46;&#46;\nLisez plut\u00f4t Generative.fm : de la musique g\u00e9n\u00e9rative pour vos sessions de travail ou de d\u00e9tente avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-06-17T14:40:31+02:00",
            "date_modified": "2019-06-17T14:40:31+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/06/generative_fm.png",
            "tags": [
                "musique",
                "productivit\u00e9",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21723",
            "url": "https://www.geekzone.fr/2019/06/11/simplify-la-simplicite-dinbox-dans-linterface-de-gmail/",
            "title": "Simplify, la simplicit\u00e9 d\u2019Inbox dans l\u2019interface de Gmail",
            "content_html": "<p>Jadis designer principal sur Gmail (de 2008 \u00e0 2012), plus r\u00e9cemment cofondateur du regrett\u00e9 Inbox, Michael Leggett avait un l\u00e9ger souci avec le look un peu \u00ab\u00a0charg\u00e9\u00a0\u00bb de sa boite mail. Il a donc d\u00e9velopp\u00e9 une&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/06/11/simplify-la-simplicite-dinbox-dans-linterface-de-gmail/\">Simplify, la simplicit\u00e9 d&rsquo;Inbox dans l&rsquo;interface de Gmail</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Jadis designer principal sur Gmail (de 2008 \u00e0 2012), plus r\u00e9cemment cofondateur du regrett\u00e9 Inbox, Michael Leggett avait un l\u00e9ger souci avec le look un peu \u00ab\u00a0charg\u00e9\u00a0\u00bb de sa boite mail. Il a donc d\u00e9velopp\u00e9 une&#46;&#46;&#46;\nLisez plut\u00f4t Simplify, la simplicit\u00e9 d&rsquo;Inbox dans l&rsquo;interface de Gmail avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-06-11T09:00:13+02:00",
            "date_modified": "2019-06-14T15:42:32+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/06/simplify_02.jpg",
            "tags": [
                "chrome",
                "extension",
                "firefox",
                "gmail",
                "google",
                "A la une",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21696",
            "url": "https://www.geekzone.fr/2019/06/03/rubber-tracks-sample-library-une-bibliotheque-de-sons-de-qualite-100-gratuite/",
            "title": "Rubber Tracks Sample Library, une biblioth\u00e8que de sons de qualit\u00e9 100% gratuite",
            "content_html": "<p>Chapeaut\u00e9e par Converse (oui, la c\u00e9l\u00e8bre marque de pompes), la Rubber Tracks Sample Library est une biblioth\u00e8que de sons en ligne, enti\u00e8rement gratuite. \u00c0 la base, Rubber Tracks est une initiative de la soci\u00e9t\u00e9 visant \u00e0&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/06/03/rubber-tracks-sample-library-une-bibliotheque-de-sons-de-qualite-100-gratuite/\">Rubber Tracks Sample Library, une biblioth\u00e8que de sons de qualit\u00e9 100% gratuite</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Chapeaut\u00e9e par Converse (oui, la c\u00e9l\u00e8bre marque de pompes), la Rubber Tracks Sample Library est une biblioth\u00e8que de sons en ligne, enti\u00e8rement gratuite. \u00c0 la base, Rubber Tracks est une initiative de la soci\u00e9t\u00e9 visant \u00e0&#46;&#46;&#46;\nLisez plut\u00f4t Rubber Tracks Sample Library, une biblioth\u00e8que de sons de qualit\u00e9 100% gratuite avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-06-03T13:23:21+02:00",
            "date_modified": "2019-06-03T13:23:21+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/06/rubber_02.jpg",
            "tags": [
                "musique",
                "production",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21638",
            "url": "https://www.geekzone.fr/2019/05/27/font-squirrel-des-centaines-de-polices-gratuites-pour-habiller-vos-projets/",
            "title": "Font Squirrel : des centaines de polices gratuites pour habiller vos projets",
            "content_html": "<p>Lanc\u00e9 en octobre 2009, il y a d\u00e9j\u00e0 bient\u00f4t 10 ans, Font Squirrel se charge d\u2019arpenter le web \u00e0 votre place, pour y d\u00e9goter les meilleures polices gratuites. Class\u00e9es en diff\u00e9rentes cat\u00e9gories et tags (Sans Serif,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/05/27/font-squirrel-des-centaines-de-polices-gratuites-pour-habiller-vos-projets/\">Font Squirrel : des centaines de polices gratuites pour habiller vos projets</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Lanc\u00e9 en octobre 2009, il y a d\u00e9j\u00e0 bient\u00f4t 10 ans, Font Squirrel se charge d\u2019arpenter le web \u00e0 votre place, pour y d\u00e9goter les meilleures polices gratuites. Class\u00e9es en diff\u00e9rentes cat\u00e9gories et tags (Sans Serif,&#46;&#46;&#46;\nLisez plut\u00f4t Font Squirrel : des centaines de polices gratuites pour habiller vos projets avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-05-27T09:00:40+02:00",
            "date_modified": "2019-05-26T18:40:14+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/05/fontsquirrel.jpg",
            "tags": [
                "design",
                "fontes",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21609",
            "url": "https://www.geekzone.fr/2019/05/22/bassoontracker-un-tracker-dans-votre-browser/",
            "title": "Bassoontracker : un tracker dans votre browser",
            "content_html": "<p>La procrastination a du bon. Mais si\u2026 Il y a quelques semaines, esquivant avec ardeur quelques trucs pros \u00e0 faire (forc\u00e9ment urgents) , j\u2019ai plong\u00e9 la t\u00eate dans des coins perdus du Web pour ramener des&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/05/22/bassoontracker-un-tracker-dans-votre-browser/\">Bassoontracker : un tracker dans votre browser</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "La procrastination a du bon. Mais si\u2026 Il y a quelques semaines, esquivant avec ardeur quelques trucs pros \u00e0 faire (forc\u00e9ment urgents) , j\u2019ai plong\u00e9 la t\u00eate dans des coins perdus du Web pour ramener des&#46;&#46;&#46;\nLisez plut\u00f4t Bassoontracker : un tracker dans votre browser avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-05-22T08:00:17+02:00",
            "date_modified": "2019-05-31T17:22:17+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/05/Bassoontracker-banner.jpg",
            "tags": [
                "amiga",
                "musique",
                "A la une",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21483",
            "url": "https://www.geekzone.fr/2019/05/13/photopea-un-clone-de-photoshop-en-ligne-et-gratuit/",
            "title": "Photopea : un clone de Photoshop en ligne, et gratuit",
            "content_html": "<p>Il arrive parfois qu\u2019on ait besoin en vitesse de faire une petite retouche \u00e0 une photo, sans avoir forc\u00e9ment acc\u00e8s \u00e0 ses logiciels pr\u00e9f\u00e9r\u00e9s. Gr\u00e2ce \u00e0 Photopea, acc\u00e9dez \u00e0 un \u00e9diteur d\u2019images complet, directement dans votre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/05/13/photopea-un-clone-de-photoshop-en-ligne-et-gratuit/\">Photopea : un clone de Photoshop en ligne, et gratuit</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Il arrive parfois qu\u2019on ait besoin en vitesse de faire une petite retouche \u00e0 une photo, sans avoir forc\u00e9ment acc\u00e8s \u00e0 ses logiciels pr\u00e9f\u00e9r\u00e9s. Gr\u00e2ce \u00e0 Photopea, acc\u00e9dez \u00e0 un \u00e9diteur d\u2019images complet, directement dans votre&#46;&#46;&#46;\nLisez plut\u00f4t Photopea : un clone de Photoshop en ligne, et gratuit avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-05-13T11:39:27+02:00",
            "date_modified": "2019-05-13T11:39:27+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/05/Photopea_02.jpg",
            "tags": [
                "photographie",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21089",
            "url": "https://www.geekzone.fr/2019/03/21/hello-goodbye-baillonnez-les-services-client-en-ligne/",
            "title": "Hello, Goodbye : b\u00e2illonnez les services client en ligne",
            "content_html": "<p>Je ne sais pas pour vous, mais moi, les sites o\u00f9 un assistant s&#8217;immisce nonchalamment sur la page pour me demander si j&#8217;ai besoin d&#8217;un coup de main, \u00e7a me stresse. Malheureusement, il parait que la&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/03/21/hello-goodbye-baillonnez-les-services-client-en-ligne/\">Hello, Goodbye : b\u00e2illonnez les services client en ligne</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je ne sais pas pour vous, mais moi, les sites o\u00f9 un assistant s&#8217;immisce nonchalamment sur la page pour me demander si j&#8217;ai besoin d&#8217;un coup de main, \u00e7a me stresse. Malheureusement, il parait que la&#46;&#46;&#46;\nLisez plut\u00f4t Hello, Goodbye : b\u00e2illonnez les services client en ligne avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-03-21T11:00:10+01:00",
            "date_modified": "2019-03-20T19:54:29+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/03/hellogoodbye.jpg",
            "tags": [
                "adblock",
                "extension",
                "utilitaires",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21082",
            "url": "https://www.geekzone.fr/2019/03/21/predominantly-decouvrez-de-la-musique-avec-les-yeux/",
            "title": "Predominantly : d\u00e9couvrez de la musique avec les yeux",
            "content_html": "<p>Dans la s\u00e9rie \u201c\u00e7a ne sert rien, donc c\u2019est rigoureusement indispensable\u201d, voici un petit outil en ligne qui devrait plaire \u00e0 nos amis graphistes et m\u00e9lomanes : Predominantly. Il suffit de choisir une couleur dans la&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/03/21/predominantly-decouvrez-de-la-musique-avec-les-yeux/\">Predominantly : d\u00e9couvrez de la musique avec les yeux</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Dans la s\u00e9rie \u201c\u00e7a ne sert rien, donc c\u2019est rigoureusement indispensable\u201d, voici un petit outil en ligne qui devrait plaire \u00e0 nos amis graphistes et m\u00e9lomanes : Predominantly. Il suffit de choisir une couleur dans la&#46;&#46;&#46;\nLisez plut\u00f4t Predominantly : d\u00e9couvrez de la musique avec les yeux avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-03-21T09:00:39+01:00",
            "date_modified": "2019-03-20T19:30:17+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/03/predominantly_01.jpg",
            "tags": [
                "graphisme",
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=21062",
            "url": "https://www.geekzone.fr/2019/03/19/tune-ne-lisez-plus-les-commentaires/",
            "title": "Tune : ne lisez plus les commentaires !",
            "content_html": "<p>Encore \u00e0 l\u2019\u00e9tat exp\u00e9rimental, Tune est une extension pour Chrome qui permet de masquer facilement les commentaires dits \u201ctoxiques\u201d des principaux r\u00e9seaux sociaux. D\u00e9velopp\u00e9 par Jigsaw (ex-Google Ideas), Tune utilise l\u2019API Perspective et profite de ses&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/03/19/tune-ne-lisez-plus-les-commentaires/\">Tune : ne lisez plus les commentaires !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Encore \u00e0 l\u2019\u00e9tat exp\u00e9rimental, Tune est une extension pour Chrome qui permet de masquer facilement les commentaires dits \u201ctoxiques\u201d des principaux r\u00e9seaux sociaux. D\u00e9velopp\u00e9 par Jigsaw (ex-Google Ideas), Tune utilise l\u2019API Perspective et profite de ses&#46;&#46;&#46;\nLisez plut\u00f4t Tune : ne lisez plus les commentaires ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-03-19T12:26:59+01:00",
            "date_modified": "2019-03-19T12:26:59+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/03/unnamed.jpg",
            "tags": [
                "chrome",
                "extension",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20984",
            "url": "https://www.geekzone.fr/2019/03/05/hypothesis-un-outil-de-surlignage-et-dannotation-gratuit-et-open-source/",
            "title": "Hypothesis : un outil de surlignage et d\u2019annotation gratuit et open source",
            "content_html": "<p>Apr\u00e8s Liner (qui, semble-t-il, se permet sans vergogne de collecter vos donn\u00e9es personnelles), je vous propose de d\u00e9couvrir un autre outil de surlignage, open source cette fois-ci, sugg\u00e9r\u00e9 par l\u2019ami Twin dans nos forums: Hypothesis. En&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/03/05/hypothesis-un-outil-de-surlignage-et-dannotation-gratuit-et-open-source/\">Hypothesis : un outil de surlignage et d&rsquo;annotation gratuit et open source</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s Liner (qui, semble-t-il, se permet sans vergogne de collecter vos donn\u00e9es personnelles), je vous propose de d\u00e9couvrir un autre outil de surlignage, open source cette fois-ci, sugg\u00e9r\u00e9 par l\u2019ami Twin dans nos forums: Hypothesis. En&#46;&#46;&#46;\nLisez plut\u00f4t Hypothesis : un outil de surlignage et d&rsquo;annotation gratuit et open source avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-03-05T12:43:31+01:00",
            "date_modified": "2019-03-05T12:43:31+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/03/vivaldi_2019-03-05_12-22-08.png",
            "tags": [
                "extension",
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20876",
            "url": "https://www.geekzone.fr/2019/02/19/liner-lextension-de-browser-qui-surligne-vos-pages-web/",
            "title": "Liner : l\u2019extension de browser qui surligne vos pages web",
            "content_html": "<p>Outil pr\u00e9cieux quand on passe beaucoup de temps sur le web \u00e0 d\u00e9cortiquer moult articles et documents, Liner propose un feutre virtuel pour vous faciliter le surlignage des passages importants. Mais pas que&#8230; Edit : Attention&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/02/19/liner-lextension-de-browser-qui-surligne-vos-pages-web/\">Liner : l\u2019extension de browser qui surligne vos pages web</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Outil pr\u00e9cieux quand on passe beaucoup de temps sur le web \u00e0 d\u00e9cortiquer moult articles et documents, Liner propose un feutre virtuel pour vous faciliter le surlignage des passages importants. Mais pas que&#8230; Edit : Attention&#46;&#46;&#46;\nLisez plut\u00f4t Liner : l\u2019extension de browser qui surligne vos pages web avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-02-19T12:31:35+01:00",
            "date_modified": "2019-02-28T21:06:29+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/02/Liner1.jpg",
            "tags": [
                "extension",
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20743",
            "url": "https://www.geekzone.fr/2019/01/23/musish-le-client-web-qui-manquait-a-apple-music/",
            "title": "Musish : le client web qui manquait \u00e0 Apple Music",
            "content_html": "<p>Apple Music, comme beaucoup de services Apple derni\u00e8rement, ne donne sa pleine mesure que sous iOS, et reste tol\u00e9rable utilis\u00e9 dans iTunes (macOS, ou Store Edition pour Windows). Il manquait pourtant toujours une version Web, exploitable&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/01/23/musish-le-client-web-qui-manquait-a-apple-music/\">Musish : le client web qui manquait \u00e0 Apple Music</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apple Music, comme beaucoup de services Apple derni\u00e8rement, ne donne sa pleine mesure que sous iOS, et reste tol\u00e9rable utilis\u00e9 dans iTunes (macOS, ou Store Edition pour Windows). Il manquait pourtant toujours une version Web, exploitable&#46;&#46;&#46;\nLisez plut\u00f4t Musish : le client web qui manquait \u00e0 Apple Music avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-01-23T16:08:58+01:00",
            "date_modified": "2019-01-25T18:36:23+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/01/Musish-Album.jpg",
            "tags": [
                "apple",
                "musique",
                "streaming",
                "A la une",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20695",
            "url": "https://www.geekzone.fr/2019/01/22/sayit-decouvrez-de-nouveaux-subreddits-ou-perdre-votre-temps/",
            "title": "SayIt : d\u00e9couvrez de nouveaux \u00ab\u00a0subreddits\u00a0\u00bb o\u00f9 perdre votre temps !",
            "content_html": "<p>On sait que vous aimez glander sur Reddit, ne niez pas ! Mais parfois, il peut \u00eatre compliqu\u00e9 de s\u2019y retrouver dans les m\u00e9andres des diff\u00e9rents \u201csubs\u201d. Pour vous aider \u00e0 y voir plus clair, je&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/01/22/sayit-decouvrez-de-nouveaux-subreddits-ou-perdre-votre-temps/\">SayIt : d\u00e9couvrez de nouveaux \u00ab\u00a0subreddits\u00a0\u00bb o\u00f9 perdre votre temps !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On sait que vous aimez glander sur Reddit, ne niez pas ! Mais parfois, il peut \u00eatre compliqu\u00e9 de s\u2019y retrouver dans les m\u00e9andres des diff\u00e9rents \u201csubs\u201d. Pour vous aider \u00e0 y voir plus clair, je&#46;&#46;&#46;\nLisez plut\u00f4t SayIt : d\u00e9couvrez de nouveaux \u00ab\u00a0subreddits\u00a0\u00bb o\u00f9 perdre votre temps ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-01-22T10:00:07+01:00",
            "date_modified": "2019-01-21T18:40:37+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/01/Screenshot_2019-01-21-Graph-of-related-subreddits1.png",
            "tags": [
                "reddit",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20675",
            "url": "https://www.geekzone.fr/2019/01/21/keepa-pour-mieux-faire-ses-emplettes-sur-amazon/",
            "title": "Keepa, pour mieux faire ses emplettes sur Amazon",
            "content_html": "<p>Si vous avez l\u2019habitude de faire souffrir votre carte bleue chez le g\u00e9ant Amazon, Keepa est un outil qui devrait vous int\u00e9resser&#8230; L\u2019objectif du site est simple : vous faciliter la t\u00e2che quand il s\u2019agit de&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/01/21/keepa-pour-mieux-faire-ses-emplettes-sur-amazon/\">Keepa, pour mieux faire ses emplettes sur Amazon</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si vous avez l\u2019habitude de faire souffrir votre carte bleue chez le g\u00e9ant Amazon, Keepa est un outil qui devrait vous int\u00e9resser&#8230; L\u2019objectif du site est simple : vous faciliter la t\u00e2che quand il s\u2019agit de&#46;&#46;&#46;\nLisez plut\u00f4t Keepa, pour mieux faire ses emplettes sur Amazon avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-01-21T12:33:14+01:00",
            "date_modified": "2019-01-21T12:33:14+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/01/pricehistory_1x.jpg",
            "tags": [
                "amazon",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20617",
            "url": "https://www.geekzone.fr/2019/01/14/audio-check-mettez-votre-systeme-audio-a-lepreuve/",
            "title": "Audio Check : mettez votre syst\u00e8me audio \u00e0 l\u2019\u00e9preuve",
            "content_html": "<p>Vous venez d&#8217;acheter de nouveaux moniteurs de studio et vous trouvez qu&#8217;ils ne sonnent pas particuli\u00e8rement bien ? Votre nouvelle installation 5.1 ne fait pas vrombir les explosions des films de Michael Bay comme elle le&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/01/14/audio-check-mettez-votre-systeme-audio-a-lepreuve/\">Audio Check : mettez votre syst\u00e8me audio \u00e0 l&rsquo;\u00e9preuve</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous venez d&#8217;acheter de nouveaux moniteurs de studio et vous trouvez qu&#8217;ils ne sonnent pas particuli\u00e8rement bien ? Votre nouvelle installation 5.1 ne fait pas vrombir les explosions des films de Michael Bay comme elle le&#46;&#46;&#46;\nLisez plut\u00f4t Audio Check : mettez votre syst\u00e8me audio \u00e0 l&rsquo;\u00e9preuve avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-01-14T15:44:15+01:00",
            "date_modified": "2019-01-14T16:04:11+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/01/techland-1822629_1920.jpg",
            "tags": [
                "audio",
                "home cinema",
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20569",
            "url": "https://www.geekzone.fr/2019/01/03/justwatch-ou-trouver-vos-films-et-series/",
            "title": "JustWatch : o\u00f9 trouver vos films et s\u00e9ries ?",
            "content_html": "<p>Avec la multiplication des services de streaming et des portails de vente en ligne, il devient parfois compliqu\u00e9 de savoir o\u00f9 l\u2019on pourra regarder films ou s\u00e9ries. Heureusement, JustWatch est l\u00e0 pour vous simplifier le boulot.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2019/01/03/justwatch-ou-trouver-vos-films-et-series/\">JustWatch : o\u00f9 trouver vos films et s\u00e9ries ?</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Avec la multiplication des services de streaming et des portails de vente en ligne, il devient parfois compliqu\u00e9 de savoir o\u00f9 l\u2019on pourra regarder films ou s\u00e9ries. Heureusement, JustWatch est l\u00e0 pour vous simplifier le boulot.&#46;&#46;&#46;\nLisez plut\u00f4t JustWatch : o\u00f9 trouver vos films et s\u00e9ries ? avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2019-01-03T11:43:18+01:00",
            "date_modified": "2019-01-03T11:43:18+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2019/01/Screenshot_2019-01-03-https-www-justwatch-com.png",
            "tags": [
                "cin\u00e9ma",
                "s\u00e9rie tv",
                "streaming",
                "vod",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20365",
            "url": "https://www.geekzone.fr/2018/12/10/dark-reader-un-mode-sombre-pour-tous-vos-sites/",
            "title": "Dark Reader : un mode \u00ab\u00a0sombre\u00a0\u00bb pour tous vos sites",
            "content_html": "<p>Blanc sur noir, ou noir sur blanc, lequel est pr\u00e9f\u00e9rable pour m\u00e9nager vos yeux ? Le sujet fait d\u00e9bat depuis toujours, et finalement, d\u00e9pend surtout des sensibilit\u00e9s de chacun. Du coup, si vous \u00eates plut\u00f4t un&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/12/10/dark-reader-un-mode-sombre-pour-tous-vos-sites/\">Dark Reader : un mode \u00ab\u00a0sombre\u00a0\u00bb pour tous vos sites</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Blanc sur noir, ou noir sur blanc, lequel est pr\u00e9f\u00e9rable pour m\u00e9nager vos yeux ? Le sujet fait d\u00e9bat depuis toujours, et finalement, d\u00e9pend surtout des sensibilit\u00e9s de chacun. Du coup, si vous \u00eates plut\u00f4t un&#46;&#46;&#46;\nLisez plut\u00f4t Dark Reader : un mode \u00ab\u00a0sombre\u00a0\u00bb pour tous vos sites avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-12-10T12:57:45+01:00",
            "date_modified": "2018-12-10T12:57:45+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/12/firefox_2018-12-10_12-39-12.png",
            "tags": [
                "browser",
                "extension",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20321",
            "url": "https://www.geekzone.fr/2018/12/04/pixabay-plus-d16-millions-dimages-libres-de-droits/",
            "title": "Pixabay : plus de 1,6 million d\u2019images libres de droits",
            "content_html": "<p>On conna\u00eet tous le probl\u00e8me : d\u00e8s qu&#8217;on a besoin d&#8217;illustrer quelque chose dans l&#8217;urgence, le premier r\u00e9flexe est d&#8217;aller chercher son bonheur sur Google. Seul petit souci : les images que remonte le moteur de&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/12/04/pixabay-plus-d16-millions-dimages-libres-de-droits/\">Pixabay : plus de 1,6 million d&rsquo;images libres de droits</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On conna\u00eet tous le probl\u00e8me : d\u00e8s qu&#8217;on a besoin d&#8217;illustrer quelque chose dans l&#8217;urgence, le premier r\u00e9flexe est d&#8217;aller chercher son bonheur sur Google. Seul petit souci : les images que remonte le moteur de&#46;&#46;&#46;\nLisez plut\u00f4t Pixabay : plus de 1,6 million d&rsquo;images libres de droits avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-12-04T17:58:53+01:00",
            "date_modified": "2018-12-05T14:59:00+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/12/stormtrooper-1343877_960_720.jpg",
            "tags": [
                "domaine public",
                "photographie",
                "vid\u00e9o",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20208",
            "url": "https://www.geekzone.fr/2018/11/26/subsrv-for-reddit-surfez-sur-plusieurs-subreddits-simultanement/",
            "title": "Subsrv for Reddit : surfez sur plusieurs subreddits simultan\u00e9ment",
            "content_html": "<p>Par d\u00e9faut, la page principale de Reddit combine tous vos abonnements en un seul flux. Une solution qui, personnellement, ne m&#8217;a jamais convaincu. Gr\u00e2ce \u00e0 Subsrv, on peut d\u00e9sormais garder un \u0153il sur ses \u00ab\u00a0subreddits\u00a0\u00bb pr\u00e9f\u00e9r\u00e9s,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/11/26/subsrv-for-reddit-surfez-sur-plusieurs-subreddits-simultanement/\">Subsrv for Reddit : surfez sur plusieurs subreddits simultan\u00e9ment</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Par d\u00e9faut, la page principale de Reddit combine tous vos abonnements en un seul flux. Une solution qui, personnellement, ne m&#8217;a jamais convaincu. Gr\u00e2ce \u00e0 Subsrv, on peut d\u00e9sormais garder un \u0153il sur ses \u00ab\u00a0subreddits\u00a0\u00bb pr\u00e9f\u00e9r\u00e9s,&#46;&#46;&#46;\nLisez plut\u00f4t Subsrv for Reddit : surfez sur plusieurs subreddits simultan\u00e9ment avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-11-26T13:49:50+01:00",
            "date_modified": "2018-11-26T13:57:19+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/11/Screenshot_2018-11-26-Subsrv-for-Reddit-Browse-all-your-subreddits-at-once.png",
            "tags": [
                "reddit",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20062",
            "url": "https://www.geekzone.fr/2018/11/12/soundfixer-boostez-le-son-des-videos-youtube/",
            "title": "SoundFixer : boostez le son des vid\u00e9os YouTube",
            "content_html": "<p>C&#8217;est malheureusement une constante dans la galaxie sur YouTube : les gens ne savent toujours pas comment normaliser une piste son. Rien de plus rageant que de devoir tout \u00e0 coup monter le volume de votre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/11/12/soundfixer-boostez-le-son-des-videos-youtube/\">SoundFixer : boostez le son des vid\u00e9os YouTube</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est malheureusement une constante dans la galaxie sur YouTube : les gens ne savent toujours pas comment normaliser une piste son. Rien de plus rageant que de devoir tout \u00e0 coup monter le volume de votre&#46;&#46;&#46;\nLisez plut\u00f4t SoundFixer : boostez le son des vid\u00e9os YouTube avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-11-12T12:27:42+01:00",
            "date_modified": "2018-11-12T12:27:42+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/11/firefox_2018-11-12_12-04-20.png",
            "tags": [
                "extension",
                "firefox",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=20036",
            "url": "https://www.geekzone.fr/2018/11/08/eva-icons-un-set-de-480-icones-open-source-pour-vos-apps-et-sites-web/",
            "title": "Eva Icons, un set de 480 ic\u00f4nes open source pour vos apps et sites web",
            "content_html": "<p>Si vous cherchiez de quoi agr\u00e9menter votre app mobile ou votre site web, j&#8217;ai ce qu&#8217;il vous faut : Eva Icons est un pack de 480 ic\u00f4nes open source, couvrant tous les besoins classiques. Disponibles en&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/11/08/eva-icons-un-set-de-480-icones-open-source-pour-vos-apps-et-sites-web/\">Eva Icons, un set de 480 ic\u00f4nes open source pour vos apps et sites web</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si vous cherchiez de quoi agr\u00e9menter votre app mobile ou votre site web, j&#8217;ai ce qu&#8217;il vous faut : Eva Icons est un pack de 480 ic\u00f4nes open source, couvrant tous les besoins classiques. Disponibles en&#46;&#46;&#46;\nLisez plut\u00f4t Eva Icons, un set de 480 ic\u00f4nes open source pour vos apps et sites web avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-11-08T13:20:34+01:00",
            "date_modified": "2018-11-08T14:39:12+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/11/68747470733a2f2f692e696d6775722e636f6d2f6f446d71446b452e6a7067.jpg",
            "tags": [
                "design",
                "open source",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19942",
            "url": "https://www.geekzone.fr/2018/10/30/discogs-lance-exclusives-un-site-pour-les-collectionneurs-melomanes/",
            "title": "Discogs lance Exclusives, un site pour les collectionneurs m\u00e9lomanes",
            "content_html": "<p>Apr\u00e8s avoir lanc\u00e9 le portail de vente d&#8217;instruments Gearogs dont on vous parlait l&#8217;ann\u00e9e derni\u00e8re, l&#8217;excellente base de donn\u00e9es en ligne musicale Discogs s&#8217;attaque d\u00e9sormais aux objets rares. Baptis\u00e9e Discogs Exclusives, cette nouvelle plateforme est encore&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/10/30/discogs-lance-exclusives-un-site-pour-les-collectionneurs-melomanes/\">Discogs lance Exclusives, un site pour les collectionneurs m\u00e9lomanes</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s avoir lanc\u00e9 le portail de vente d&#8217;instruments Gearogs dont on vous parlait l&#8217;ann\u00e9e derni\u00e8re, l&#8217;excellente base de donn\u00e9es en ligne musicale Discogs s&#8217;attaque d\u00e9sormais aux objets rares. Baptis\u00e9e Discogs Exclusives, cette nouvelle plateforme est encore&#46;&#46;&#46;\nLisez plut\u00f4t Discogs lance Exclusives, un site pour les collectionneurs m\u00e9lomanes avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-10-30T12:34:01+01:00",
            "date_modified": "2018-10-30T12:34:01+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/10/firefox_2018-10-30_12-24-03.png",
            "tags": [
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19812",
            "url": "https://www.geekzone.fr/2018/10/16/20-gb-de-photos-hd-libres-de-droit/",
            "title": "20 Go de photos HD libres de droit",
            "content_html": "<p>D&#8217;ordinaire, sur Geekzone, vu mon amour de la musique, je suis plut\u00f4t enclin \u00e0 vous filer des banques de sons gratos. Mais je n&#8217;oublie pas pour autant les autres disciplines artistiques. Histoire de changer un peu,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/10/16/20-gb-de-photos-hd-libres-de-droit/\">20 Go de photos HD libres de droit</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "D&#8217;ordinaire, sur Geekzone, vu mon amour de la musique, je suis plut\u00f4t enclin \u00e0 vous filer des banques de sons gratos. Mais je n&#8217;oublie pas pour autant les autres disciplines artistiques. Histoire de changer un peu,&#46;&#46;&#46;\nLisez plut\u00f4t 20 Go de photos HD libres de droit avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-10-16T12:18:38+02:00",
            "date_modified": "2018-10-16T19:50:16+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/10/ENG-460363.jpg",
            "tags": [
                "photographie",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19800",
            "url": "https://www.geekzone.fr/2018/10/15/mytuner-50-000-stations-de-radio-a-portee-de-clic-gratuitement/",
            "title": "myTuner : 50.000 stations de radio \u00e0 port\u00e9e de clic, gratuitement",
            "content_html": "<p>Si de nos jours plus grand monde n&#8217;\u00e9coute la radio, en ce qui me concerne, elle demeure toujours l&#8217;un de mes m\u00e9dias pr\u00e9f\u00e9r\u00e9s. Et gr\u00e2ce au streaming moderne, et au site myTuner, on peut gratuitement d\u00e9couvrir&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/10/15/mytuner-50-000-stations-de-radio-a-portee-de-clic-gratuitement/\">myTuner : 50.000 stations de radio \u00e0 port\u00e9e de clic, gratuitement</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si de nos jours plus grand monde n&#8217;\u00e9coute la radio, en ce qui me concerne, elle demeure toujours l&#8217;un de mes m\u00e9dias pr\u00e9f\u00e9r\u00e9s. Et gr\u00e2ce au streaming moderne, et au site myTuner, on peut gratuitement d\u00e9couvrir&#46;&#46;&#46;\nLisez plut\u00f4t myTuner : 50.000 stations de radio \u00e0 port\u00e9e de clic, gratuitement avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-10-15T14:52:10+02:00",
            "date_modified": "2018-10-15T14:52:10+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/10/oldradio.png",
            "tags": [
                "musique",
                "radio",
                "streaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19725",
            "url": "https://www.geekzone.fr/2018/10/09/freshrss-un-lecteur-de-flux-rss-poids-plume-gratuit-a-installer-soi-meme/",
            "title": "FreshRSS : un lecteur de flux RSS poids plume, gratuit, \u00e0 installer soi-m\u00eame",
            "content_html": "<p>Pour ceux que nos pr\u00e9c\u00e9dentes suggestions de lecteurs RSS n&#8217;auraient pas encore convaincus, je vous propose aujourd&#8217;hui de d\u00e9couvrir FreshRSS, un agr\u00e9gateur ultra l\u00e9ger \u00e0 installer soi-m\u00eame. Projet open source collaboratif, articul\u00e9 autour de Pelican (un&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/10/09/freshrss-un-lecteur-de-flux-rss-poids-plume-gratuit-a-installer-soi-meme/\">FreshRSS : un lecteur de flux RSS poids plume, gratuit, \u00e0 installer soi-m\u00eame</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pour ceux que nos pr\u00e9c\u00e9dentes suggestions de lecteurs RSS n&#8217;auraient pas encore convaincus, je vous propose aujourd&#8217;hui de d\u00e9couvrir FreshRSS, un agr\u00e9gateur ultra l\u00e9ger \u00e0 installer soi-m\u00eame. Projet open source collaboratif, articul\u00e9 autour de Pelican (un&#46;&#46;&#46;\nLisez plut\u00f4t FreshRSS : un lecteur de flux RSS poids plume, gratuit, \u00e0 installer soi-m\u00eame avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-10-09T15:19:39+02:00",
            "date_modified": "2018-10-09T15:19:39+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/10/screenshot.png",
            "tags": [
                "rss",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19549",
            "url": "https://www.geekzone.fr/2018/09/21/musicbutler-ne-loupez-plus-aucune-sortie-de-vos-artistes-preferes/",
            "title": "MusicButler : ne loupez plus aucune sortie de vos artistes pr\u00e9f\u00e9r\u00e9s",
            "content_html": "<p>Je vous en parlais ce matin dans le dernier \u00e9pisode de Torr\u00e9faction, mais pour ceux qui n&#8217;auraient pas encore \u00e9cout\u00e9 notre merveilleux podcast hebdomadaire, j&#8217;en remets une couche par ici. Si vous \u00eates un gros consommateur&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/09/21/musicbutler-ne-loupez-plus-aucune-sortie-de-vos-artistes-preferes/\">MusicButler : ne loupez plus aucune sortie de vos artistes pr\u00e9f\u00e9r\u00e9s</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je vous en parlais ce matin dans le dernier \u00e9pisode de Torr\u00e9faction, mais pour ceux qui n&#8217;auraient pas encore \u00e9cout\u00e9 notre merveilleux podcast hebdomadaire, j&#8217;en remets une couche par ici. Si vous \u00eates un gros consommateur&#46;&#46;&#46;\nLisez plut\u00f4t MusicButler : ne loupez plus aucune sortie de vos artistes pr\u00e9f\u00e9r\u00e9s avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-09-21T11:02:44+02:00",
            "date_modified": "2018-09-21T11:02:44+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/09/musicbutler_header.jpg",
            "tags": [
                "musique",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19513",
            "url": "https://www.geekzone.fr/2018/09/18/rfi-savoirs-la-plateforme-documentaire-de-radio-france-internationale/",
            "title": "RFI Savoirs, la plateforme documentaire de Radio France Internationale",
            "content_html": "<p>Pour ceux qui, comme moi, seraient pass\u00e9s \u00e0 c\u00f4t\u00e9, je vous invite \u00e0 d\u00e9couvrir RFI Savoirs, une plateforme documentaire lanc\u00e9e en novembre 2015, qui compile diverses ressources issues des archives de Radio France Internationale, et les&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/09/18/rfi-savoirs-la-plateforme-documentaire-de-radio-france-internationale/\">RFI Savoirs, la plateforme documentaire de Radio France Internationale</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pour ceux qui, comme moi, seraient pass\u00e9s \u00e0 c\u00f4t\u00e9, je vous invite \u00e0 d\u00e9couvrir RFI Savoirs, une plateforme documentaire lanc\u00e9e en novembre 2015, qui compile diverses ressources issues des archives de Radio France Internationale, et les&#46;&#46;&#46;\nLisez plut\u00f4t RFI Savoirs, la plateforme documentaire de Radio France Internationale avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-09-18T08:55:48+02:00",
            "date_modified": "2018-09-18T08:55:48+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/09/Screenshot_2018-09-18-RFI-SAVOIRS.png",
            "tags": [
                "documentaire",
                "\u00e9ducation",
                "Culture",
                "Science",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19472",
            "url": "https://www.geekzone.fr/2018/09/11/bazqux-reader-le-lecteur-de-flux-rss-ultra-leger-desormais-compatible-mobile/",
            "title": "BazQux Reader : le lecteur de flux RSS ultra-l\u00e9ger d\u00e9sormais compatible mobile",
            "content_html": "<p>Lanc\u00e9 en juin 2012 par un d\u00e9veloppeur solitaire, BazQux Reader \u00e9tait rest\u00e9 jusqu&#8217;ici plut\u00f4t discret dans le paysage des lecteurs de flux RSS. La faute sans doute \u00e0 l&#8217;absence d&#8217;une version compatible mobile. Mais comme cet&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/09/11/bazqux-reader-le-lecteur-de-flux-rss-ultra-leger-desormais-compatible-mobile/\">BazQux Reader : le lecteur de flux RSS ultra-l\u00e9ger d\u00e9sormais compatible mobile</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Lanc\u00e9 en juin 2012 par un d\u00e9veloppeur solitaire, BazQux Reader \u00e9tait rest\u00e9 jusqu&#8217;ici plut\u00f4t discret dans le paysage des lecteurs de flux RSS. La faute sans doute \u00e0 l&#8217;absence d&#8217;une version compatible mobile. Mais comme cet&#46;&#46;&#46;\nLisez plut\u00f4t BazQux Reader : le lecteur de flux RSS ultra-l\u00e9ger d\u00e9sormais compatible mobile avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-09-11T09:00:47+02:00",
            "date_modified": "2018-09-11T07:46:18+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/09/firefox_2018-09-11_07-15-55.png",
            "tags": [
                "rss",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19182",
            "url": "https://www.geekzone.fr/2018/07/10/bjokib-de-la-musique-libre-de-droits-sans-inscription/",
            "title": "BjoKib : de la musique libre de droits, sans inscription",
            "content_html": "<p>Apr\u00e8s Bensound, dont je vous parlais il y a quelques semaines, je vous propose aujourd&#8217;hui rajouter \u00e0 vos bookmarks un autre site de musique libre de droits : BjoKib. Principalement orient\u00e9 \u00ab\u00a0sons \u00e9lectroniques\u00a0\u00bb, le site propose&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/07/10/bjokib-de-la-musique-libre-de-droits-sans-inscription/\">BjoKib : de la musique libre de droits, sans inscription</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s Bensound, dont je vous parlais il y a quelques semaines, je vous propose aujourd&#8217;hui rajouter \u00e0 vos bookmarks un autre site de musique libre de droits : BjoKib. Principalement orient\u00e9 \u00ab\u00a0sons \u00e9lectroniques\u00a0\u00bb, le site propose&#46;&#46;&#46;\nLisez plut\u00f4t BjoKib : de la musique libre de droits, sans inscription avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-07-10T17:16:03+02:00",
            "date_modified": "2018-07-10T17:16:03+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/07/898556-download-electro-music-wallpaper-2169x1355-full-hd.jpg",
            "tags": [
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19039",
            "url": "https://www.geekzone.fr/2018/06/21/bensound-de-la-musique-royalty-free-pour-habiller-vos-projets-multimedias/",
            "title": "Bensound : de la musique \u00ab\u00a0royalty-free\u00a0\u00bb pour habiller vos projets multim\u00e9dias",
            "content_html": "<p>Petit coup de projecteur sur un projet \u00ab\u00a0made in France\u00a0\u00bb plut\u00f4t chouette : Bensound, un site proposant de la musique originale sans royalties, pour sonoriser vos cr\u00e9ations multim\u00e9dias sans avoir \u00e0 saigner votre compte en banque.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/06/21/bensound-de-la-musique-royalty-free-pour-habiller-vos-projets-multimedias/\">Bensound : de la musique \u00ab\u00a0royalty-free\u00a0\u00bb pour habiller vos projets multim\u00e9dias</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Petit coup de projecteur sur un projet \u00ab\u00a0made in France\u00a0\u00bb plut\u00f4t chouette : Bensound, un site proposant de la musique originale sans royalties, pour sonoriser vos cr\u00e9ations multim\u00e9dias sans avoir \u00e0 saigner votre compte en banque.&#46;&#46;&#46;\nLisez plut\u00f4t Bensound : de la musique \u00ab\u00a0royalty-free\u00a0\u00bb pour habiller vos projets multim\u00e9dias avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-06-21T08:30:44+02:00",
            "date_modified": "2018-06-21T06:58:10+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/06/Screenshot-2018-6-21-Royalty-Free-Music-by-Bensound-Stock-Music.png",
            "tags": [
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=19017",
            "url": "https://www.geekzone.fr/2018/06/19/within-des-documentaires-et-court-metrages-en-realite-virtuelle-a-devorer-avec-ou-sans-casque/",
            "title": "Within : des documentaires et court-m\u00e9trages en r\u00e9alit\u00e9 virtuelle, \u00e0 d\u00e9vorer avec ou sans casque",
            "content_html": "<p>Lanc\u00e9 il y a un peu moins d&#8217;une semaine, Within est un nouveau portail propos\u00e9 par la soci\u00e9t\u00e9 californienne du m\u00eame nom, offrant en acc\u00e8s libre et gratuit une cinquantaine de documentaires et court-m\u00e9trages tourn\u00e9s en&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/06/19/within-des-documentaires-et-court-metrages-en-realite-virtuelle-a-devorer-avec-ou-sans-casque/\">Within : des documentaires et court-m\u00e9trages en r\u00e9alit\u00e9 virtuelle, \u00e0 d\u00e9vorer avec ou sans casque</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Lanc\u00e9 il y a un peu moins d&#8217;une semaine, Within est un nouveau portail propos\u00e9 par la soci\u00e9t\u00e9 californienne du m\u00eame nom, offrant en acc\u00e8s libre et gratuit une cinquantaine de documentaires et court-m\u00e9trages tourn\u00e9s en&#46;&#46;&#46;\nLisez plut\u00f4t Within : des documentaires et court-m\u00e9trages en r\u00e9alit\u00e9 virtuelle, \u00e0 d\u00e9vorer avec ou sans casque avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-06-19T16:04:32+02:00",
            "date_modified": "2018-06-19T16:04:32+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/06/screenshot.png",
            "tags": [
                "court-m\u00e9trage",
                "documentaire",
                "r\u00e9alit\u00e9 virtuelle",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18693",
            "url": "https://www.geekzone.fr/2018/05/10/whydoc-la-medecine-comprehensible-par-tous/",
            "title": "WhyDoc, la m\u00e9decine compr\u00e9hensible par tous",
            "content_html": "<p>\u00c0 l&#8217;heure o\u00f9 la France conna\u00eet un inqui\u00e9tant regain de scepticisme \u00e0 l&#8217;\u00e9gard de la m\u00e9decine, voire de la science en g\u00e9n\u00e9ral (coucou les anti-vaccins et autres hom\u00e9opathes), il nous semblait important de mettre en avant&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/05/10/whydoc-la-medecine-comprehensible-par-tous/\">WhyDoc, la m\u00e9decine compr\u00e9hensible par tous</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "\u00c0 l&#8217;heure o\u00f9 la France conna\u00eet un inqui\u00e9tant regain de scepticisme \u00e0 l&#8217;\u00e9gard de la m\u00e9decine, voire de la science en g\u00e9n\u00e9ral (coucou les anti-vaccins et autres hom\u00e9opathes), il nous semblait important de mettre en avant&#46;&#46;&#46;\nLisez plut\u00f4t WhyDoc, la m\u00e9decine compr\u00e9hensible par tous avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-05-10T12:56:16+02:00",
            "date_modified": "2018-05-10T12:56:16+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/05/firefox_2018-05-10_12-49-38.png",
            "tags": [
                "m\u00e9decine",
                "Science",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18508",
            "url": "https://www.geekzone.fr/2018/04/26/google-tasks-service-minimum/",
            "title": "Google Tasks : service minimum",
            "content_html": "<p>Pendant que Gmail se refait une beaut\u00e9 et s\u2019int\u00e8gre enfin correctement avec le reste des outils Google afin de mieux concurrencer Office 365, un autre accessoire se paye un lifting avant de rejoindre la trousse \u00e0&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/26/google-tasks-service-minimum/\">Google Tasks : service minimum</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pendant que Gmail se refait une beaut\u00e9 et s\u2019int\u00e8gre enfin correctement avec le reste des outils Google afin de mieux concurrencer Office 365, un autre accessoire se paye un lifting avant de rejoindre la trousse \u00e0&#46;&#46;&#46;\nLisez plut\u00f4t Google Tasks : service minimum avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-26T19:05:20+02:00",
            "date_modified": "2018-04-26T19:05:20+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/Google-Tasks.jpg",
            "tags": [
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18460",
            "url": "https://www.geekzone.fr/2018/04/24/terms-of-service-didnt-read-le-service-pour-se-simplifier-les-tos/",
            "title": "Terms of Service; Didn\u2019t Read : le service pour se simplifier les ToS",
            "content_html": "<p>Ah, les ToS ! Les fameux \u00ab\u00a0Terms of Service\u00a0\u00bb (\u00ab\u00a0conditions d&#8217;utilisation\u00a0\u00bb chez nous) auxquels tout le monde consent, mais que personne ne lit jamais vraiment. Si seulement il existait quelque part une version simplifi\u00e9e qui va&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/24/terms-of-service-didnt-read-le-service-pour-se-simplifier-les-tos/\">Terms of Service; Didn&rsquo;t Read : le service pour se simplifier les ToS</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Ah, les ToS ! Les fameux \u00ab\u00a0Terms of Service\u00a0\u00bb (\u00ab\u00a0conditions d&#8217;utilisation\u00a0\u00bb chez nous) auxquels tout le monde consent, mais que personne ne lit jamais vraiment. Si seulement il existait quelque part une version simplifi\u00e9e qui va&#46;&#46;&#46;\nLisez plut\u00f4t Terms of Service; Didn&rsquo;t Read : le service pour se simplifier les ToS avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-24T10:00:35+02:00",
            "date_modified": "2018-04-24T04:34:58+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/tosdr-logo.png",
            "tags": [
                "vie priv\u00e9e",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18447",
            "url": "https://www.geekzone.fr/2018/04/23/la-bbc-vous-offre-16-000-effets-sonores/",
            "title": "La BBC vous offre 16 000 effets sonores",
            "content_html": "<p>Pour \u00eatre pr\u00e9cis, c\u2019est m\u00eame 16 016 \u00e9chantillons qui sont disponibles sur le site de la BBC, dans le cadre de leur excellent projet RES (Research and Education Space), qui vise \u00e0 faciliter l&#8217;acc\u00e8s du public&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/23/la-bbc-vous-offre-16-000-effets-sonores/\">La BBC vous offre 16 000 effets sonores</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Pour \u00eatre pr\u00e9cis, c\u2019est m\u00eame 16 016 \u00e9chantillons qui sont disponibles sur le site de la BBC, dans le cadre de leur excellent projet RES (Research and Education Space), qui vise \u00e0 faciliter l&#8217;acc\u00e8s du public&#46;&#46;&#46;\nLisez plut\u00f4t La BBC vous offre 16 000 effets sonores avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-23T15:00:09+02:00",
            "date_modified": "2018-04-23T14:33:25+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/Sound-Banner.jpg",
            "tags": [
                "sons",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18413",
            "url": "https://www.geekzone.fr/2018/04/19/clickup-le-slack-de-la-gestion-de-projets/",
            "title": "ClickUp, le Slack de la gestion de projets",
            "content_html": "<p>Depuis notre dossier pour fuir Wunderlist, le paysage des services d\u00e9di\u00e9s \u00e0 la gestion de projets a bien \u00e9volu\u00e9. Je parle ici de produits capables de g\u00e9rer des t\u00e2ches complexes, en \u00e9quipe, et de ce fait,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/19/clickup-le-slack-de-la-gestion-de-projets/\">ClickUp, le Slack de la gestion de projets</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Depuis notre dossier pour fuir Wunderlist, le paysage des services d\u00e9di\u00e9s \u00e0 la gestion de projets a bien \u00e9volu\u00e9. Je parle ici de produits capables de g\u00e9rer des t\u00e2ches complexes, en \u00e9quipe, et de ce fait,&#46;&#46;&#46;\nLisez plut\u00f4t ClickUp, le Slack de la gestion de projets avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-19T12:09:38+02:00",
            "date_modified": "2018-04-20T14:58:30+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/clickup-mobile-apps-banner.jpg",
            "tags": [
                "productivit\u00e9",
                "A la une",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18399",
            "url": "https://www.geekzone.fr/2018/04/17/conserve-the-sound-le-musee-des-sons-oublies/",
            "title": "Conserve The Sound : le mus\u00e9e des sons oubli\u00e9s",
            "content_html": "<p>Conserve The Sound (\u00ab\u00a0Pr\u00e9server le son\u00a0\u00bb, en bon fran\u00e7ais) est un mus\u00e9e en ligne d\u00e9di\u00e9 aux sons en voie de disparition : modem, walkman, machine \u00e0 \u00e9crire m\u00e9canique, tous ces objets qui ont quasiment disparu de&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/17/conserve-the-sound-le-musee-des-sons-oublies/\">Conserve The Sound : le mus\u00e9e des sons oubli\u00e9s</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Conserve The Sound (\u00ab\u00a0Pr\u00e9server le son\u00a0\u00bb, en bon fran\u00e7ais) est un mus\u00e9e en ligne d\u00e9di\u00e9 aux sons en voie de disparition : modem, walkman, machine \u00e0 \u00e9crire m\u00e9canique, tous ces objets qui ont quasiment disparu de&#46;&#46;&#46;\nLisez plut\u00f4t Conserve The Sound : le mus\u00e9e des sons oubli\u00e9s avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-17T18:14:59+02:00",
            "date_modified": "2018-04-17T18:16:06+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/firefox_2018-04-17_18-15-29.png",
            "tags": [
                "sons",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18273",
            "url": "https://www.geekzone.fr/2018/04/03/cloudflare-dns-gratuit-prive/",
            "title": "Cloudflare lance un service DNS rapide, gratuit et respectueux de votre vie priv\u00e9e",
            "content_html": "<p>Vous vous rappelez de notre tuto sur les DNS ? Bonne nouvelle, vous pouvez en rajouter un \u00e0 la liste ! Cloudflare, une soci\u00e9t\u00e9 qui s\u2019est d\u00e9j\u00e0 fait remarquer en montant au cr\u00e9neau sur les sujets&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/04/03/cloudflare-dns-gratuit-prive/\">Cloudflare lance un service DNS rapide, gratuit et respectueux de votre vie priv\u00e9e</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous vous rappelez de notre tuto sur les DNS ? Bonne nouvelle, vous pouvez en rajouter un \u00e0 la liste ! Cloudflare, une soci\u00e9t\u00e9 qui s\u2019est d\u00e9j\u00e0 fait remarquer en montant au cr\u00e9neau sur les sujets&#46;&#46;&#46;\nLisez plut\u00f4t Cloudflare lance un service DNS rapide, gratuit et respectueux de votre vie priv\u00e9e avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-04-03T17:30:38+02:00",
            "date_modified": "2018-04-03T17:30:38+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/04/1.1.1.1-laptop.jpg",
            "tags": [
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18240",
            "url": "https://www.geekzone.fr/2018/03/28/facebook-container-limitez-le-pistage-du-reseau-social/",
            "title": "Facebook Container : limitez le pistage du r\u00e9seau social",
            "content_html": "<p>Si l&#8217;affaire Cambridge Analytica et la campagne mitig\u00e9e autour du #DeleteFacebook nous ont appris un truc, c&#8217;est bien qu&#8217;il est aujourd&#8217;hui devenu tr\u00e8s difficile de se d\u00e9faire compl\u00e8tement du r\u00e9seau social. Alors, plut\u00f4t que de recourir&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/03/28/facebook-container-limitez-le-pistage-du-reseau-social/\">Facebook Container : limitez le pistage du r\u00e9seau social</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si l&#8217;affaire Cambridge Analytica et la campagne mitig\u00e9e autour du #DeleteFacebook nous ont appris un truc, c&#8217;est bien qu&#8217;il est aujourd&#8217;hui devenu tr\u00e8s difficile de se d\u00e9faire compl\u00e8tement du r\u00e9seau social. Alors, plut\u00f4t que de recourir&#46;&#46;&#46;\nLisez plut\u00f4t Facebook Container : limitez le pistage du r\u00e9seau social avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-03-28T16:00:26+02:00",
            "date_modified": "2018-03-28T16:00:26+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/03/FF58_Moz.org_FacebookContainerExtension_blog-header-v1-02.jpg",
            "tags": [
                "facebook",
                "firefox",
                "vie priv\u00e9e",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18172",
            "url": "https://www.geekzone.fr/2018/03/19/cambridge-analytica-un-outil-de-guerre-psychologique-pour-influencer-lopinion/",
            "title": "Cambridge Analytica : un \u00ab\u00a0outil de guerre psychologique\u00a0\u00bb pour influencer l\u2019opinion",
            "content_html": "<p>Comme je n&#8217;ai pas (encore) beaucoup vu tourner l&#8217;info dans les m\u00e9dias nationaux, je me suis dit qu&#8217;il \u00e9tait sans doute utile de vous partager cette interview de Christopher Wylie, r\u00e9alis\u00e9e par les journalistes de The&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/03/19/cambridge-analytica-un-outil-de-guerre-psychologique-pour-influencer-lopinion/\">Cambridge Analytica : un \u00ab\u00a0outil de guerre psychologique\u00a0\u00bb pour influencer l&rsquo;opinion</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Comme je n&#8217;ai pas (encore) beaucoup vu tourner l&#8217;info dans les m\u00e9dias nationaux, je me suis dit qu&#8217;il \u00e9tait sans doute utile de vous partager cette interview de Christopher Wylie, r\u00e9alis\u00e9e par les journalistes de The&#46;&#46;&#46;\nLisez plut\u00f4t Cambridge Analytica : un \u00ab\u00a0outil de guerre psychologique\u00a0\u00bb pour influencer l&rsquo;opinion avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-03-19T13:28:46+01:00",
            "date_modified": "2018-03-19T13:31:36+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/03/AP_17062603787974-804x450.jpg",
            "tags": [
                "facebook",
                "s\u00e9curit\u00e9",
                "vie priv\u00e9e",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18137",
            "url": "https://www.geekzone.fr/2018/03/15/fin-de-partie-pour-digg-reader-rappel-des-alternatives-pour-lire-vos-rss/",
            "title": "Fin de partie pour Digg Reader, rappel des alternatives pour lire vos RSS",
            "content_html": "<p>Digg Reader n\u2019a jamais trouv\u00e9 sa place sur le march\u00e9 des lecteurs RSS et va fermer ses portes le 26 mars prochain. Un rappel douloureux du manque de succ\u00e8s de ces solutions c\u00f4t\u00e9 grand public, qui&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/03/15/fin-de-partie-pour-digg-reader-rappel-des-alternatives-pour-lire-vos-rss/\">Fin de partie pour Digg Reader, rappel des alternatives pour lire vos RSS</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Digg Reader n\u2019a jamais trouv\u00e9 sa place sur le march\u00e9 des lecteurs RSS et va fermer ses portes le 26 mars prochain. Un rappel douloureux du manque de succ\u00e8s de ces solutions c\u00f4t\u00e9 grand public, qui&#46;&#46;&#46;\nLisez plut\u00f4t Fin de partie pour Digg Reader, rappel des alternatives pour lire vos RSS avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-03-15T09:48:38+01:00",
            "date_modified": "2018-03-15T09:48:38+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/03/Digg-Reader-End-2.jpg",
            "tags": [
                "rss",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18112",
            "url": "https://www.geekzone.fr/2018/03/09/torrefaction-de-liens-et-videos-de-la-semaine/",
            "title": "Torr\u00e9faction de liens et vid\u00e9os de la semaine",
            "content_html": "<p>J\u2019avoue que j\u2019aurais pu vous faire le podcast en solo pour aujourd\u2019hui, mais \u00e7a aurait quand m\u00eame oblig\u00e9 Faskil \u00e0 sortir de sa couette pour effectuer son mixing magique. Et personne ne veut grelotter devant un&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/03/09/torrefaction-de-liens-et-videos-de-la-semaine/\">Torr\u00e9faction de liens et vid\u00e9os de la semaine</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "J\u2019avoue que j\u2019aurais pu vous faire le podcast en solo pour aujourd\u2019hui, mais \u00e7a aurait quand m\u00eame oblig\u00e9 Faskil \u00e0 sortir de sa couette pour effectuer son mixing magique. Et personne ne veut grelotter devant un&#46;&#46;&#46;\nLisez plut\u00f4t Torr\u00e9faction de liens et vid\u00e9os de la semaine avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-03-09T10:00:24+01:00",
            "date_modified": "2018-03-22T21:37:29+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/05/torre01.jpg",
            "tags": [
                "torr\u00e9faction",
                "Culture",
                "Gaming",
                "Mobile",
                "Softs &amp; Apps",
                "Tech",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18076",
            "url": "https://www.geekzone.fr/2018/03/02/twitter-permet-enfin-de-bookmarker-les-tweets-interessants-a-condition-utiliser-les-outils-officiels/",
            "title": "Twitter permet enfin de bookmarker les tweets int\u00e9ressants, \u00e0 condition d\u2019utiliser les outils officiels",
            "content_html": "<p>Nous en parlions ce matin dans Torr\u00e9faction : Twitter se r\u00e9veille enfin et offre la possibilit\u00e9 de sauvegarder un tweet via une nouvelle fonction de signets bien pratique. Mais oublie une fois de plus l\u2019API qui&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/03/02/twitter-permet-enfin-de-bookmarker-les-tweets-interessants-a-condition-utiliser-les-outils-officiels/\">Twitter permet enfin de bookmarker les tweets int\u00e9ressants, \u00e0 condition d\u2019utiliser les outils officiels</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Nous en parlions ce matin dans Torr\u00e9faction : Twitter se r\u00e9veille enfin et offre la possibilit\u00e9 de sauvegarder un tweet via une nouvelle fonction de signets bien pratique. Mais oublie une fois de plus l\u2019API qui&#46;&#46;&#46;\nLisez plut\u00f4t Twitter permet enfin de bookmarker les tweets int\u00e9ressants, \u00e0 condition d\u2019utiliser les outils officiels avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-03-02T16:37:25+01:00",
            "date_modified": "2018-03-02T16:37:25+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/03/Twitter-Banner.jpg",
            "tags": [
                "r\u00e9seaux sociaux",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18015",
            "url": "https://www.geekzone.fr/2018/02/21/launchaco-portail-web-gratos-vos-projets/",
            "title": "Launchaco : un portail web gratos pour vos projets",
            "content_html": "<p>Sur le m\u00eame principe qu&#8217;About.me (ou que le d\u00e9funt Flavors.me), Launchaco vous permet en quelques clics de cr\u00e9er une page web, sobre mais classe, pour pr\u00e9senter votre projet sur les Internets. Pratique quand on n&#8217;a vraiment&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/02/21/launchaco-portail-web-gratos-vos-projets/\">Launchaco : un portail web gratos pour vos projets</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Sur le m\u00eame principe qu&#8217;About.me (ou que le d\u00e9funt Flavors.me), Launchaco vous permet en quelques clics de cr\u00e9er une page web, sobre mais classe, pour pr\u00e9senter votre projet sur les Internets. Pratique quand on n&#8217;a vraiment&#46;&#46;&#46;\nLisez plut\u00f4t Launchaco : un portail web gratos pour vos projets avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-02-21T16:19:59+01:00",
            "date_modified": "2018-02-21T16:19:59+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/02/Screenshot-2018-2-21-Startup-Website-Builder-Launchaco.png",
            "tags": [
                "design",
                "productivit\u00e9",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=18005",
            "url": "https://www.geekzone.fr/2018/02/19/comment-recuperer-le-bouton-voir-image-dans-google-search/",
            "title": "Comment r\u00e9cup\u00e9rer le bouton \u201cvoir l\u2019image\u201d dans la recherche Google",
            "content_html": "<p>Apr\u00e8s des ann\u00e9es de batailles juridiques, Google a pli\u00e9 devant Getty Images. Les d\u00e9saccords entre les deux entit\u00e9s se sont transform\u00e9s en un \u201cpartenariat\u201d d\u2019un coup de baguette magique cens\u00e9 prot\u00e9ger les droits d\u2019auteur des visuels&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/02/19/comment-recuperer-le-bouton-voir-image-dans-google-search/\">Comment r\u00e9cup\u00e9rer le bouton \u201cvoir l\u2019image\u201d dans la recherche Google</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s des ann\u00e9es de batailles juridiques, Google a pli\u00e9 devant Getty Images. Les d\u00e9saccords entre les deux entit\u00e9s se sont transform\u00e9s en un \u201cpartenariat\u201d d\u2019un coup de baguette magique cens\u00e9 prot\u00e9ger les droits d\u2019auteur des visuels&#46;&#46;&#46;\nLisez plut\u00f4t Comment r\u00e9cup\u00e9rer le bouton \u201cvoir l\u2019image\u201d dans la recherche Google avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-02-19T17:51:44+01:00",
            "date_modified": "2018-02-20T17:02:27+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/02/HappyPuppy.jpg",
            "tags": [
                "recherche",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17933",
            "url": "https://www.geekzone.fr/2018/02/12/soundwhich-nouveau-portail-de-vente-de-stems-morceaux-libres-de-droit/",
            "title": "Soundwhich : un nouveau portail de vente de \u00ab\u00a0stems\u00a0\u00bb et morceaux libres de droit",
            "content_html": "<p>Je vous en parlais d\u00e9j\u00e0 dans le dernier \u00e9pisode de Torr\u00e9faction, mais pour ceux qui l&#8217;auraient loup\u00e9, petite mention de l&#8217;arriv\u00e9e sur le march\u00e9 d&#8217;une nouvelle plateforme d\u00e9di\u00e9e aux producteurs de son, la bien-nomm\u00e9e Soundwhich. Parfois,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/02/12/soundwhich-nouveau-portail-de-vente-de-stems-morceaux-libres-de-droit/\">Soundwhich : un nouveau portail de vente de \u00ab\u00a0stems\u00a0\u00bb et morceaux libres de droit</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je vous en parlais d\u00e9j\u00e0 dans le dernier \u00e9pisode de Torr\u00e9faction, mais pour ceux qui l&#8217;auraient loup\u00e9, petite mention de l&#8217;arriv\u00e9e sur le march\u00e9 d&#8217;une nouvelle plateforme d\u00e9di\u00e9e aux producteurs de son, la bien-nomm\u00e9e Soundwhich. Parfois,&#46;&#46;&#46;\nLisez plut\u00f4t Soundwhich : un nouveau portail de vente de \u00ab\u00a0stems\u00a0\u00bb et morceaux libres de droit avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-02-12T12:05:45+01:00",
            "date_modified": "2018-02-12T22:37:05+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/02/soundwhich_header.jpg",
            "tags": [
                "musique",
                "production",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17907",
            "url": "https://www.geekzone.fr/2018/02/09/winamp2-sinvite-navigateur/",
            "title": "Winamp2 s\u2019invite dans votre navigateur",
            "content_html": "<p>Il y a des projets \u00e0 l\u2019utilit\u00e9 douteuse qui forcent l\u2019admiration. Ce portage de Winamp2 en JavaScript et HTML5 rentre sans probl\u00e8me dans cette cat\u00e9gorie. Il g\u00e8re jusqu\u2019aux skins de l\u2019\u00e9poque et vient titiller votre fibre&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/02/09/winamp2-sinvite-navigateur/\">Winamp2 s&rsquo;invite dans votre navigateur</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Il y a des projets \u00e0 l\u2019utilit\u00e9 douteuse qui forcent l\u2019admiration. Ce portage de Winamp2 en JavaScript et HTML5 rentre sans probl\u00e8me dans cette cat\u00e9gorie. Il g\u00e8re jusqu\u2019aux skins de l\u2019\u00e9poque et vient titiller votre fibre&#46;&#46;&#46;\nLisez plut\u00f4t Winamp2 s&rsquo;invite dans votre navigateur avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-02-09T11:00:55+01:00",
            "date_modified": "2018-02-09T09:58:53+01:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/02/Winamp2-JS-Caf.jpg",
            "tags": [
                "musique",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17751",
            "url": "https://www.geekzone.fr/2018/01/15/proshare-audio-tourner-vos-demos/",
            "title": "proshare.audio : faites tourner vos d\u00e9mos !",
            "content_html": "<p>Dans la jungle actuelle de la production musicale, tout artiste ind\u00e9 qui se lance le sait bien : il est de plus en plus difficile d&#8217;\u00e9merger au-dessus de la masse, voire simplement d&#8217;attirer l&#8217;attention des labels.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/01/15/proshare-audio-tourner-vos-demos/\">proshare.audio : faites tourner vos d\u00e9mos !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Dans la jungle actuelle de la production musicale, tout artiste ind\u00e9 qui se lance le sait bien : il est de plus en plus difficile d&#8217;\u00e9merger au-dessus de la masse, voire simplement d&#8217;attirer l&#8217;attention des labels.&#46;&#46;&#46;\nLisez plut\u00f4t proshare.audio : faites tourner vos d\u00e9mos ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-01-15T15:35:54+01:00",
            "date_modified": "2018-01-15T15:37:07+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/01/proshare-logo-1200x630.png",
            "tags": [
                "musique",
                "production",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17633",
            "url": "https://www.geekzone.fr/2018/01/04/whosampled-savoir-a-sample/",
            "title": "WhoSampled : pour savoir qui a sampl\u00e9 qui",
            "content_html": "<p>L&#8217;autre jour, au d\u00e9tour d&#8217;une playlist al\u00e9atoire dans MusicBee, je suis retomb\u00e9 sur une vieille compile du label allemand Kompakt, Total 4 pour ne pas la citer. Et sur cet album, un morceau de Michael Mayer&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2018/01/04/whosampled-savoir-a-sample/\">WhoSampled : pour savoir qui a sampl\u00e9 qui</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "L&#8217;autre jour, au d\u00e9tour d&#8217;une playlist al\u00e9atoire dans MusicBee, je suis retomb\u00e9 sur une vieille compile du label allemand Kompakt, Total 4 pour ne pas la citer. Et sur cet album, un morceau de Michael Mayer&#46;&#46;&#46;\nLisez plut\u00f4t WhoSampled : pour savoir qui a sampl\u00e9 qui avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2018-01-04T09:00:33+01:00",
            "date_modified": "2018-01-04T11:15:42+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2018/01/whosampled_logo_hires.png",
            "tags": [
                "musique",
                "utilitaires",
                "Mobile",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17424",
            "url": "https://www.geekzone.fr/2017/12/19/markmaker-generateur-automatique-de-logos-business/",
            "title": "MarkMaker, un g\u00e9n\u00e9rateur automatique de logos pour votre business",
            "content_html": "<p>Petit outil web bien pratique, qui pourra sans doute vous d\u00e9panner si vous \u00eates \u00e0 la recherche d&#8217;un petit logo \u00ab\u00a0vite fait\u00a0\u00bb pour illustrer votre nouveau blog ou habiller le site d&#8217;un client qui n&#8217;a pas&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/12/19/markmaker-generateur-automatique-de-logos-business/\">MarkMaker, un g\u00e9n\u00e9rateur automatique de logos pour votre business</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Petit outil web bien pratique, qui pourra sans doute vous d\u00e9panner si vous \u00eates \u00e0 la recherche d&#8217;un petit logo \u00ab\u00a0vite fait\u00a0\u00bb pour illustrer votre nouveau blog ou habiller le site d&#8217;un client qui n&#8217;a pas&#46;&#46;&#46;\nLisez plut\u00f4t MarkMaker, un g\u00e9n\u00e9rateur automatique de logos pour votre business avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-12-19T17:35:46+01:00",
            "date_modified": "2017-12-19T17:35:46+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/12/markmaker1.png",
            "tags": [
                "design",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17231",
            "url": "https://www.geekzone.fr/2017/12/04/petit-coup-de-peinture-freeciv-webgl-clone-de-civilization-jouable-ligne/",
            "title": "Petit coup de peinture pour Freeciv WebGL, le clone de Civilization jouable en ligne",
            "content_html": "<p>Vous connaissez tous Freeciv, ce jeu open source gratuit inspir\u00e9 de la s\u00e9rie Civilization de Sid Meier. Mais connaissiez-vous sa version web ? Freeciv WebGL vient justement de s&#8217;offrir un petit lifting visuel, l&#8217;occasion de d\u00e9couvrir&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/12/04/petit-coup-de-peinture-freeciv-webgl-clone-de-civilization-jouable-ligne/\">Petit coup de peinture pour Freeciv WebGL, le clone de Civilization jouable en ligne</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous connaissez tous Freeciv, ce jeu open source gratuit inspir\u00e9 de la s\u00e9rie Civilization de Sid Meier. Mais connaissiez-vous sa version web ? Freeciv WebGL vient justement de s&#8217;offrir un petit lifting visuel, l&#8217;occasion de d\u00e9couvrir&#46;&#46;&#46;\nLisez plut\u00f4t Petit coup de peinture pour Freeciv WebGL, le clone de Civilization jouable en ligne avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-12-04T14:20:56+01:00",
            "date_modified": "2017-12-04T14:20:56+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/12/freeciv-webgl_blog_1.jpg",
            "tags": [
                "gratuit",
                "jeux vid\u00e9o",
                "strat\u00e9gie",
                "Gaming",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=17130",
            "url": "https://www.geekzone.fr/2017/11/23/moviemania-creme-de-creme-wallpapers-cinema/",
            "title": "MovieMania : la cr\u00e8me de la cr\u00e8me des wallpapers cin\u00e9ma",
            "content_html": "<p>Si vous \u00eates fan de cin\u00e9ma et gros collectionneur de fonds d&#8217;\u00e9cran, j&#8217;ai le site qu&#8217;il vous faut. D\u00e9couvert au hasard d&#8217;une conversation sur notre excellent canal Discord, MovieMania propose des wallpapers tri\u00e9s sur le volet,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/11/23/moviemania-creme-de-creme-wallpapers-cinema/\">MovieMania : la cr\u00e8me de la cr\u00e8me des wallpapers cin\u00e9ma</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Si vous \u00eates fan de cin\u00e9ma et gros collectionneur de fonds d&#8217;\u00e9cran, j&#8217;ai le site qu&#8217;il vous faut. D\u00e9couvert au hasard d&#8217;une conversation sur notre excellent canal Discord, MovieMania propose des wallpapers tri\u00e9s sur le volet,&#46;&#46;&#46;\nLisez plut\u00f4t MovieMania : la cr\u00e8me de la cr\u00e8me des wallpapers cin\u00e9ma avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-11-23T09:16:01+01:00",
            "date_modified": "2017-11-23T09:16:01+01:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/11/star-wars-the-last-jedi_03dd_1680x1050.jpg",
            "tags": [
                "fonds d'\u00e9cran",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16947",
            "url": "https://www.geekzone.fr/2017/11/02/survivre-a-lapocalypse-extension-apres-firefox-57/",
            "title": "Firefox 57 : comment survivre \u00e0 l\u2019apocalypse des extension ?",
            "content_html": "<p>On vous en parlait d\u00e9j\u00e0 il y a deux ans, le 14 novembre prochain Firefox nous arrive en version estampil\u00e9e 57, et avec celle-ci, la fin des extensions \u00ab\u00a0classiques\u00a0\u00bb. Dor\u00e9navant, le c\u00e9l\u00e8bre browser de Mozilla ne&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/11/02/survivre-a-lapocalypse-extension-apres-firefox-57/\">Firefox 57 : comment survivre \u00e0 l\u2019apocalypse des extension ?</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "On vous en parlait d\u00e9j\u00e0 il y a deux ans, le 14 novembre prochain Firefox nous arrive en version estampil\u00e9e 57, et avec celle-ci, la fin des extensions \u00ab\u00a0classiques\u00a0\u00bb. Dor\u00e9navant, le c\u00e9l\u00e8bre browser de Mozilla ne&#46;&#46;&#46;\nLisez plut\u00f4t Firefox 57 : comment survivre \u00e0 l\u2019apocalypse des extension ? avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-11-02T16:46:20+01:00",
            "date_modified": "2017-11-02T17:23:41+01:00",
            "authors": [
                {
                    "name": "Twin",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/11/firefox-57.jpg",
            "tags": [
                "browser",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16812",
            "url": "https://www.geekzone.fr/2017/10/18/krack-wi-fi-vulnerable-quil-faut-savoir/",
            "title": "KRACK : le Wi-Fi vuln\u00e9rable, tout ce qu\u2019il faut savoir",
            "content_html": "<p>L\u2019affaire fait les gros titres de la presse depuis quelques jours : une faille critique aurait \u00e9t\u00e9 d\u00e9couverte dans le protocole WPA2, faille qui permettrait \u00e0 n\u2019importe quel piratin de s\u2019inviter dans votre r\u00e9seau Wi-Fi. Qu\u2019en&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/10/18/krack-wi-fi-vulnerable-quil-faut-savoir/\">KRACK : le Wi-Fi vuln\u00e9rable, tout ce qu\u2019il faut savoir</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "L\u2019affaire fait les gros titres de la presse depuis quelques jours : une faille critique aurait \u00e9t\u00e9 d\u00e9couverte dans le protocole WPA2, faille qui permettrait \u00e0 n\u2019importe quel piratin de s\u2019inviter dans votre r\u00e9seau Wi-Fi. Qu\u2019en&#46;&#46;&#46;\nLisez plut\u00f4t KRACK : le Wi-Fi vuln\u00e9rable, tout ce qu\u2019il faut savoir avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-10-18T14:47:25+02:00",
            "date_modified": "2017-10-18T14:51:46+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/10/krack-main.jpg",
            "tags": [
                "s\u00e9curit\u00e9",
                "wi-fi",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16771",
            "url": "https://www.geekzone.fr/2017/10/16/noteapp-panneau-a-post-it-virtuel-partageable/",
            "title": "NoteApp : un panneau \u00e0 post-it virtuel et partageable",
            "content_html": "<p>C&#8217;est rigolo : il y a quelques jours \u00e0 peine, on se disait avec ma copine qu&#8217;on aurait bien besoin d&#8217;un outil simple, central et collaboratif pour g\u00e9rer les trucs p\u00e9nibles du quotidien : \u00ab\u00a0ne pas&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/10/16/noteapp-panneau-a-post-it-virtuel-partageable/\">NoteApp : un panneau \u00e0 post-it virtuel et partageable</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est rigolo : il y a quelques jours \u00e0 peine, on se disait avec ma copine qu&#8217;on aurait bien besoin d&#8217;un outil simple, central et collaboratif pour g\u00e9rer les trucs p\u00e9nibles du quotidien : \u00ab\u00a0ne pas&#46;&#46;&#46;\nLisez plut\u00f4t NoteApp : un panneau \u00e0 post-it virtuel et partageable avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-10-16T15:58:31+02:00",
            "date_modified": "2017-10-25T18:05:40+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/10/51baa4ff-12b7-4761-9579-a5a255ed4878.png",
            "tags": [
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16306",
            "url": "https://www.geekzone.fr/2017/10/04/mettez-vous-a-la-programmation-remixez-avec-glitch/",
            "title": "Mettez-vous \u00e0 la programmation : remixez avec Glitch",
            "content_html": "<p>Vous avez toujours r\u00eav\u00e9 de vous mettre \u00e0 la programmation mais n&#8217;avez jamais os\u00e9 vous lancer ? Ou vous vous \u00eates tout simplement d\u00e9courag\u00e9 devant la pl\u00e9thore de langages parmi lesquels choisir ? Et si, plut\u00f4t&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/10/04/mettez-vous-a-la-programmation-remixez-avec-glitch/\">Mettez-vous \u00e0 la programmation : remixez avec Glitch</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous avez toujours r\u00eav\u00e9 de vous mettre \u00e0 la programmation mais n&#8217;avez jamais os\u00e9 vous lancer ? Ou vous vous \u00eates tout simplement d\u00e9courag\u00e9 devant la pl\u00e9thore de langages parmi lesquels choisir ? Et si, plut\u00f4t&#46;&#46;&#46;\nLisez plut\u00f4t Mettez-vous \u00e0 la programmation : remixez avec Glitch avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-10-04T16:47:07+02:00",
            "date_modified": "2017-10-04T16:47:07+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/10/glitch.jpg",
            "tags": [
                "e-learning",
                "programmation",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16301",
            "url": "https://www.geekzone.fr/2017/10/03/utilisez-groove-music-plus-longtemps/",
            "title": "Vous utilisez Groove Music ? Plus pour longtemps !",
            "content_html": "<p>C&#8217;est officiel : apr\u00e8s avoir (vainement) tent\u00e9 d&#8217;imposer leur solution sur le march\u00e9 du streaming de musique, Microsoft a finalement d\u00e9cid\u00e9 de l\u00e2cher l&#8217;affaire et d&#8217;abandonner son service Groove Music. Et en profite au passage pour&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/10/03/utilisez-groove-music-plus-longtemps/\">Vous utilisez Groove Music ? Plus pour longtemps !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est officiel : apr\u00e8s avoir (vainement) tent\u00e9 d&#8217;imposer leur solution sur le march\u00e9 du streaming de musique, Microsoft a finalement d\u00e9cid\u00e9 de l\u00e2cher l&#8217;affaire et d&#8217;abandonner son service Groove Music. Et en profite au passage pour&#46;&#46;&#46;\nLisez plut\u00f4t Vous utilisez Groove Music ? Plus pour longtemps ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-10-03T17:37:27+02:00",
            "date_modified": "2017-10-03T17:37:27+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/10/76883a46f8bb9e7e79e67224d447b89d.png",
            "tags": [
                "microsoft",
                "musique",
                "spotify",
                "streaming",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16130",
            "url": "https://www.geekzone.fr/2017/09/12/borderline-revendez-vos-vieux-projets-prennent-poussiere/",
            "title": "Borderline : revendez vos vieux projets qui prennent la poussi\u00e8re",
            "content_html": "<p>C&#8217;est un sc\u00e9nario relativement classique : on est jeune, plein d&#8217;ambition, et on se lance dans la cr\u00e9ation d&#8217;un soft qui, contre toute attente, rencontre un certain succ\u00e8s. Au d\u00e9but, on fait \u00e7a surtout pour le&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/09/12/borderline-revendez-vos-vieux-projets-prennent-poussiere/\">Borderline : revendez vos vieux projets qui prennent la poussi\u00e8re</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "C&#8217;est un sc\u00e9nario relativement classique : on est jeune, plein d&#8217;ambition, et on se lance dans la cr\u00e9ation d&#8217;un soft qui, contre toute attente, rencontre un certain succ\u00e8s. Au d\u00e9but, on fait \u00e7a surtout pour le&#46;&#46;&#46;\nLisez plut\u00f4t Borderline : revendez vos vieux projets qui prennent la poussi\u00e8re avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-09-12T17:27:17+02:00",
            "date_modified": "2017-09-12T17:27:33+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/09/borderline_logo.jpg",
            "tags": [
                "d\u00e9veloppement",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16117",
            "url": "https://www.geekzone.fr/2017/09/11/humbeatz-de-musique-bouche/",
            "title": "HumBeatz : faites de la musique avec la bouche",
            "content_html": "<p>Comme c&#8217;est lundi et qu&#8217;on a encore tous un peu de mal \u00e0 laisser le weekend derri\u00e8re nous, je me suis dit que j&#8217;allais attaquer cette nouvelle semaine avec un petit outil rigolo : HumBeatz, une&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/09/11/humbeatz-de-musique-bouche/\">HumBeatz : faites de la musique avec la bouche</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Comme c&#8217;est lundi et qu&#8217;on a encore tous un peu de mal \u00e0 laisser le weekend derri\u00e8re nous, je me suis dit que j&#8217;allais attaquer cette nouvelle semaine avec un petit outil rigolo : HumBeatz, une&#46;&#46;&#46;\nLisez plut\u00f4t HumBeatz : faites de la musique avec la bouche avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-09-11T16:06:09+02:00",
            "date_modified": "2017-09-11T16:14:24+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/09/humbeatz.jpg",
            "tags": [
                "musique",
                "production",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16063",
            "url": "https://www.geekzone.fr/2017/09/05/createur-de-vivaldi-pousse-coup-de-gueule-contre-pratiques-dintimidation-de-google/",
            "title": "Le cr\u00e9ateur de Vivaldi pousse un coup de gueule contre les pratiques d\u2019intimidation de Google",
            "content_html": "<p>D\u00e9cid\u00e9ment, en ce moment, les oreilles de l&#8217;ami Google doivent siffler all\u00e8grement : apr\u00e8s avoir pest\u00e9 hier sur l&#8217;assassinat de ProTube par le g\u00e9ant de Mountain View, on s&#8217;int\u00e9resse aujourd&#8217;hui aux all\u00e9gations du cr\u00e9ateur des browsers&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/09/05/createur-de-vivaldi-pousse-coup-de-gueule-contre-pratiques-dintimidation-de-google/\">Le cr\u00e9ateur de Vivaldi pousse un coup de gueule contre les pratiques d&rsquo;intimidation de Google</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "D\u00e9cid\u00e9ment, en ce moment, les oreilles de l&#8217;ami Google doivent siffler all\u00e8grement : apr\u00e8s avoir pest\u00e9 hier sur l&#8217;assassinat de ProTube par le g\u00e9ant de Mountain View, on s&#8217;int\u00e9resse aujourd&#8217;hui aux all\u00e9gations du cr\u00e9ateur des browsers&#46;&#46;&#46;\nLisez plut\u00f4t Le cr\u00e9ateur de Vivaldi pousse un coup de gueule contre les pratiques d&rsquo;intimidation de Google avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-09-05T16:14:21+02:00",
            "date_modified": "2017-09-05T16:14:21+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/09/wyMrOQB.jpg",
            "tags": [
                "google",
                "vivaldi",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=16000",
            "url": "https://www.geekzone.fr/2017/08/28/wekan-alternative-gratuite-open-source-a-trello/",
            "title": "Wekan : une alternative gratuite et open source \u00e0 Trello",
            "content_html": "<p>Parmi les outils de productivit\u00e9 bas\u00e9s sur la m\u00e9thode kanban, Trello se hisse toujours en t\u00eate niveau popularit\u00e9. Ce qui n&#8217;emp\u00eache pas la concurrence d&#8217;essayer de lui ravir ce titre. On vous avait d\u00e9j\u00e0 parl\u00e9 du&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/28/wekan-alternative-gratuite-open-source-a-trello/\">Wekan : une alternative gratuite et open source \u00e0 Trello</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Parmi les outils de productivit\u00e9 bas\u00e9s sur la m\u00e9thode kanban, Trello se hisse toujours en t\u00eate niveau popularit\u00e9. Ce qui n&#8217;emp\u00eache pas la concurrence d&#8217;essayer de lui ravir ce titre. On vous avait d\u00e9j\u00e0 parl\u00e9 du&#46;&#46;&#46;\nLisez plut\u00f4t Wekan : une alternative gratuite et open source \u00e0 Trello avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-28T14:43:06+02:00",
            "date_modified": "2017-08-28T14:43:06+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/screenshot.png",
            "tags": [
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15969",
            "url": "https://www.geekzone.fr/2017/08/24/alternatives-a-google-docs/",
            "title": "Outils d\u2019\u00e9criture en ligne : il n\u2019y a pas que Google Docs dans la vie",
            "content_html": "<p>Je vous \u00e9pargne l\u2019intro classique de la d\u00e9prime, \u00e0 base de \u201cblablabla, c\u2019est bient\u00f4t la rentr\u00e9e, blabla, travail, oulalala on \u00e9tait mieux en vacances\u201d, vous connaissez la chanson. C\u2019est l\u2019heure de bosser, et dans les outils&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/24/alternatives-a-google-docs/\">Outils d&rsquo;\u00e9criture en ligne : il n&rsquo;y a pas que Google Docs dans la vie</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je vous \u00e9pargne l\u2019intro classique de la d\u00e9prime, \u00e0 base de \u201cblablabla, c\u2019est bient\u00f4t la rentr\u00e9e, blabla, travail, oulalala on \u00e9tait mieux en vacances\u201d, vous connaissez la chanson. C\u2019est l\u2019heure de bosser, et dans les outils&#46;&#46;&#46;\nLisez plut\u00f4t Outils d&rsquo;\u00e9criture en ligne : il n&rsquo;y a pas que Google Docs dans la vie avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-24T14:18:26+02:00",
            "date_modified": "2017-08-29T16:44:10+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/Gdocs-Alt-Beegit.png",
            "tags": [
                "productivit\u00e9",
                "A la une",
                "Dossiers",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15959",
            "url": "https://www.geekzone.fr/2017/08/23/hypercard-lancetre-html-fete-30-ans-redecouvrez-soft-dapple-grace-a-archive-org/",
            "title": "HyperCard, l\u2019anc\u00eatre du HTML, f\u00eate ses 30 ans : (re)d\u00e9couvrez le soft d\u2019Apple gr\u00e2ce \u00e0 Archive.org",
            "content_html": "<p>Tr\u00e8s actifs en ce moment, les archivistes d&#8217;Archive.org viennent de mettre en ligne le logiciel HyperCard con\u00e7u par Apple en 1987, et qu&#8217;on consid\u00e8re aujourd&#8217;hui comme l&#8217;anc\u00eatre de l&#8217;hypertexte autour duquel s&#8217;architecture tout le web moderne.&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/23/hypercard-lancetre-html-fete-30-ans-redecouvrez-soft-dapple-grace-a-archive-org/\">HyperCard, l&rsquo;anc\u00eatre du HTML, f\u00eate ses 30 ans : (re)d\u00e9couvrez le soft d&rsquo;Apple gr\u00e2ce \u00e0 Archive.org</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Tr\u00e8s actifs en ce moment, les archivistes d&#8217;Archive.org viennent de mettre en ligne le logiciel HyperCard con\u00e7u par Apple en 1987, et qu&#8217;on consid\u00e8re aujourd&#8217;hui comme l&#8217;anc\u00eatre de l&#8217;hypertexte autour duquel s&#8217;architecture tout le web moderne.&#46;&#46;&#46;\nLisez plut\u00f4t HyperCard, l&rsquo;anc\u00eatre du HTML, f\u00eate ses 30 ans : (re)d\u00e9couvrez le soft d&rsquo;Apple gr\u00e2ce \u00e0 Archive.org avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-23T17:49:24+02:00",
            "date_modified": "2017-08-23T18:21:03+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/hypercard.jpg",
            "tags": [
                "apple",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15954",
            "url": "https://www.geekzone.fr/2017/08/23/just-read-une-extension-chrome-pour-se-simplifier-la-lecture/",
            "title": "Just Read : une extension Chrome pour se simplifier la lecture",
            "content_html": "<p>Alors que tous les browsers du march\u00e9 disposent aujourd&#8217;hui d&#8217;un mode \u00ab\u00a0lecture\u00a0\u00bb (m\u00eame Vivaldi s&#8217;y est mis r\u00e9cemment), Chrome est toujours un peu \u00e0 la tra\u00eene sur le sujet. Certes, il y a bien un \u00ab\u00a0distill&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/23/just-read-une-extension-chrome-pour-se-simplifier-la-lecture/\">Just Read : une extension Chrome pour se simplifier la lecture</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Alors que tous les browsers du march\u00e9 disposent aujourd&#8217;hui d&#8217;un mode \u00ab\u00a0lecture\u00a0\u00bb (m\u00eame Vivaldi s&#8217;y est mis r\u00e9cemment), Chrome est toujours un peu \u00e0 la tra\u00eene sur le sujet. Certes, il y a bien un \u00ab\u00a0distill&#46;&#46;&#46;\nLisez plut\u00f4t Just Read : une extension Chrome pour se simplifier la lecture avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-23T15:44:23+02:00",
            "date_modified": "2017-08-23T15:44:23+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/vivaldi_2017-08-23_15-05-05.png",
            "tags": [
                "browser",
                "extension",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15908",
            "url": "https://www.geekzone.fr/2017/08/18/etes-auteur-de-bd-connaitre-grace-a-globalcomix/",
            "title": "Vous \u00eates auteur de BD ? Faites-vous connaitre gr\u00e2ce \u00e0 GlobalComix !",
            "content_html": "<p>Je vous en parlais dans le dernier \u00e9pisode de Torr\u00e9faction (sorti ce matin, mangez-en), apr\u00e8s plus de trois ans de d\u00e9veloppement, la plateforme GlobalComix se lance enfin en b\u00eata publique ! Leur ambition : offrir aux&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/18/etes-auteur-de-bd-connaitre-grace-a-globalcomix/\">Vous \u00eates auteur de BD ? Faites-vous connaitre gr\u00e2ce \u00e0 GlobalComix !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je vous en parlais dans le dernier \u00e9pisode de Torr\u00e9faction (sorti ce matin, mangez-en), apr\u00e8s plus de trois ans de d\u00e9veloppement, la plateforme GlobalComix se lance enfin en b\u00eata publique ! Leur ambition : offrir aux&#46;&#46;&#46;\nLisez plut\u00f4t Vous \u00eates auteur de BD ? Faites-vous connaitre gr\u00e2ce \u00e0 GlobalComix ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-18T14:48:04+02:00",
            "date_modified": "2017-08-18T14:48:04+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/vivaldi_2017-08-18_14-41-04.png",
            "tags": [
                "bande dessin\u00e9e",
                "comics",
                "Culture",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15892",
            "url": "https://www.geekzone.fr/2017/08/17/lire-reddit-sans-subir-reddit/",
            "title": "Lire Reddit, sans subir Reddit",
            "content_html": "<p>Au milieu de l\u2019oc\u00e9an de d\u00e9tritus qui constitue 90% de son contenu, Reddit cache quelques perles int\u00e9ressantes. Pour garder un oeil sur ces Subreddit potables sans \u00eatre oblig\u00e9 de marcher dans la boue, il est possible&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/17/lire-reddit-sans-subir-reddit/\">Lire Reddit, sans subir Reddit</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Au milieu de l\u2019oc\u00e9an de d\u00e9tritus qui constitue 90% de son contenu, Reddit cache quelques perles int\u00e9ressantes. Pour garder un oeil sur ces Subreddit potables sans \u00eatre oblig\u00e9 de marcher dans la boue, il est possible&#46;&#46;&#46;\nLisez plut\u00f4t Lire Reddit, sans subir Reddit avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-17T19:07:58+02:00",
            "date_modified": "2017-08-17T19:11:02+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/Reddit-RSS-Banner.jpg",
            "tags": [
                "rss",
                "Tutos",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15821",
            "url": "https://www.geekzone.fr/2017/08/10/fontface-ninja-polices-passent-a-table/",
            "title": "Avec Fontface Ninja, les polices passent \u00e0 table !",
            "content_html": "<p>Voici un petit outil qui devrait sans conteste faire la joie de mes amis graphistes et web-designers (en tous cas, ceux qui ne le connaissent pas encore) : Fontface Ninja, une extension de browser hautement pratique,&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/08/10/fontface-ninja-polices-passent-a-table/\">Avec Fontface Ninja, les polices passent \u00e0 table !</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Voici un petit outil qui devrait sans conteste faire la joie de mes amis graphistes et web-designers (en tous cas, ceux qui ne le connaissent pas encore) : Fontface Ninja, une extension de browser hautement pratique,&#46;&#46;&#46;\nLisez plut\u00f4t Avec Fontface Ninja, les polices passent \u00e0 table ! avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-08-10T15:30:37+02:00",
            "date_modified": "2017-08-10T15:30:37+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/08/vivaldi_2017-08-10_15-03-27.png",
            "tags": [
                "design",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15645",
            "url": "https://www.geekzone.fr/2017/07/25/adobe-se-decide-enfin-a-tuer-flash/",
            "title": "Adobe se d\u00e9cide enfin \u00e0 tuer Flash",
            "content_html": "<p>D\u00e9sactiv\u00e9 par d\u00e9faut dans de nombreux navigateurs, d\u00e9test\u00e9 par tous les utilisateurs du Web un peu avertis, Flash est moribond depuis d\u00e9j\u00e0 de nombreuses ann\u00e9es. Mais comme une vieille maladie tenace, il \u00e9tait toujours l\u00e0, tapi&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/07/25/adobe-se-decide-enfin-a-tuer-flash/\">Adobe se d\u00e9cide enfin \u00e0 tuer Flash</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "D\u00e9sactiv\u00e9 par d\u00e9faut dans de nombreux navigateurs, d\u00e9test\u00e9 par tous les utilisateurs du Web un peu avertis, Flash est moribond depuis d\u00e9j\u00e0 de nombreuses ann\u00e9es. Mais comme une vieille maladie tenace, il \u00e9tait toujours l\u00e0, tapi&#46;&#46;&#46;\nLisez plut\u00f4t Adobe se d\u00e9cide enfin \u00e0 tuer Flash avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-07-25T20:13:59+02:00",
            "date_modified": "2017-07-25T20:13:59+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/07/flash_is_dead.png",
            "tags": [
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15626",
            "url": "https://www.geekzone.fr/2017/07/24/social-fixer-rendre-facebook-meilleur/",
            "title": "Social Fixer : pour rendre Facebook meilleur",
            "content_html": "<p>Je ne sais pas pour vous, mais en ce qui me concerne, mon animosit\u00e9 \u00e0 l&#8217;\u00e9gard de Facebook grandit \u00e0 chaque utilisation. Avec une interface de moins en moins pens\u00e9e pour les utilisateurs, et de plus&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/07/24/social-fixer-rendre-facebook-meilleur/\">Social Fixer : pour rendre Facebook meilleur</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Je ne sais pas pour vous, mais en ce qui me concerne, mon animosit\u00e9 \u00e0 l&#8217;\u00e9gard de Facebook grandit \u00e0 chaque utilisation. Avec une interface de moins en moins pens\u00e9e pour les utilisateurs, et de plus&#46;&#46;&#46;\nLisez plut\u00f4t Social Fixer : pour rendre Facebook meilleur avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-07-24T15:06:53+02:00",
            "date_modified": "2017-07-24T15:06:53+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/07/socialfixerlogo.jpg",
            "tags": [
                "r\u00e9seaux sociaux",
                "utilitaires",
                "Softs &amp; Apps",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15566",
            "url": "https://www.geekzone.fr/2017/07/14/ne-pleurerai-mort-de-soundcloud/",
            "title": "Pourquoi je ne pleurerai pas la mort de SoundCloud\u2026",
            "content_html": "<p>Apr\u00e8s le licenciement de 173 personnes et la fermeture de leurs bureaux de San Francisco et Londres, la rumeur enfle depuis quelques jours sur le web : SoundCloud s&#8217;appr\u00eaterait \u00e0 mettre la cl\u00e9 sous la porte&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/07/14/ne-pleurerai-mort-de-soundcloud/\">Pourquoi je ne pleurerai pas la mort de SoundCloud&#8230;</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Apr\u00e8s le licenciement de 173 personnes et la fermeture de leurs bureaux de San Francisco et Londres, la rumeur enfle depuis quelques jours sur le web : SoundCloud s&#8217;appr\u00eaterait \u00e0 mettre la cl\u00e9 sous la porte&#46;&#46;&#46;\nLisez plut\u00f4t Pourquoi je ne pleurerai pas la mort de SoundCloud&#8230; avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-07-14T17:39:57+02:00",
            "date_modified": "2017-07-16T16:21:36+02:00",
            "authors": [
                {
                    "name": "Faskil",
                    "url": "https://www.geekzone.fr/author/faskil/",
                    "avatar": "https://secure.gravatar.com/avatar/e460d45135d5ee071593d6b89dd79b4e?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/07/SoundCloud_logo_orange_color_plain.svg_.png",
            "tags": [
                "musique",
                "soundcloud",
                "Web"
            ]
        },
        {
            "id": "https://www.geekzone.fr/?p=15312",
            "url": "https://www.geekzone.fr/2017/06/22/twist-la-communication-equipe-repensee/",
            "title": "Twist, la communication d\u2019\u00e9quipe repens\u00e9e",
            "content_html": "<p>Vous connaissez d\u00e9j\u00e0 Slack ? Hipchat ? Microsoft Teams ? Facebook for Work ? Il existe en fait plus de 10 solutions de communication d\u2019\u00e9quipe en temps r\u00e9el sur le march\u00e9. On assiste \u00e0 une v\u00e9ritable&#46;&#46;&#46;</p>\n<p>Lisez plut\u00f4t <a rel=\"nofollow\" href=\"https://www.geekzone.fr/2017/06/22/twist-la-communication-equipe-repensee/\">Twist, la communication d\u2019\u00e9quipe repens\u00e9e</a> avec sa vraie mise en page sur <a rel=\"nofollow\" href=\"https://www.geekzone.fr\">Geekzone</a>. Pensez \u00e0 vos r\u00e9tines.</p>\n",
            "content_text": "Vous connaissez d\u00e9j\u00e0 Slack ? Hipchat ? Microsoft Teams ? Facebook for Work ? Il existe en fait plus de 10 solutions de communication d\u2019\u00e9quipe en temps r\u00e9el sur le march\u00e9. On assiste \u00e0 une v\u00e9ritable&#46;&#46;&#46;\nLisez plut\u00f4t Twist, la communication d\u2019\u00e9quipe repens\u00e9e avec sa vraie mise en page sur Geekzone. Pensez \u00e0 vos r\u00e9tines.",
            "date_published": "2017-06-22T17:42:26+02:00",
            "date_modified": "2017-06-22T17:50:29+02:00",
            "authors": [
                {
                    "name": "Cafeine",
                    "url": "https://www.geekzone.fr/author/cafeine/",
                    "avatar": "https://secure.gravatar.com/avatar/10d6398449644e0f5b34bfe6f7b0a4a8?s=512&d=retro&r=g"
                }
            ],
            "image": "https://www.geekzone.fr/wp-content/uploads/2017/06/Twist-Banner.jpg",
            "tags": [
                "productivit\u00e9",
                "Softs &amp; Apps",
                "Web"
            ]
        }
    ]
}

function afficheArticle(article) {

  let element = document.createElement("li");

  let lien = document.createElement("a");
  lien.href = article.url;
  lien.textContent = article.title;

  element.appendChild(lien);
  return element;
}

let liste = document.createElement("ul");

for(let i = 0; i < 10; i++) {
  article = afficheArticle(data.items[i]);
  liste.appendChild(article);
}

document.querySelector(".gz-articles").appendChild(liste);
