import { mergeProps } from 'solid-js';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export default function RichText(props) {
  const merged = mergeProps({ document: [] }, props);

  const options = {
    renderNode: {
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
        [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
        [BLOCKS.HEADING_5]: (node, children) => (
          <div>
            <h5>{children}</h5>
          </div>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        // [BLOCKS.EMBEDDED_ASSET]: (node) => {
        //   const { gatsbyImageData, description } = node.data.target;
        //   return (
        //     <MonsterWrap>
        //       <img src={BlueTriclops} className='monster-left' alt='' />
        //       <GatsbyImage
        //         image={getImage(gatsbyImageData)}
        //         alt={description}
        //       />
        //     </MonsterWrap>
        //   );
        // },
        [INLINES.HYPERLINK]: (node) => {
          if (node.data.uri.indexOf('youtube.com/embed') !== -1) {
            return (
              <MonsterWrap>
                <img src={OrangeCyclops} className='monster-right' alt='' />
                <iframe
                  width='100%'
                  height='321'
                  src={node.data.uri}
                  frameborder='0'
                  title='YouTube'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </MonsterWrap>
            );
          } else {
            return (
              <a
                href={node.data.uri}
                target={`${
                  node.data.uri.startsWith(
                    'https://xenodochial-dubinsky-db8110.netlify.app'
                  )
                    ? '_self'
                    : '_blank'
                }`}
                rel={`${
                  node.data.uri.startsWith(
                    'https://xenodochial-dubinsky-db8110.netlify.app'
                  )
                    ? ''
                    : 'noopener noreferrer'
                }`}
              >
                {node.content[0].value}
              </a>
            );
          }
        },
      },
    },
  };

  return <div>{documentToHtmlString(merged.document, options)}</div>;
}
