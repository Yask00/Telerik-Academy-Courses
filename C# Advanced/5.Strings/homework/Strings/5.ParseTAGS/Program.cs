using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _05_Parse_Tags_3
{
    class ParseTags3
    {

        static void Main()
        {
            string text = Console.ReadLine();
            StringBuilder convertedText = new StringBuilder();
            string openTag = "<upcase>";
            int lenOpentag = openTag.Length;
            string closeTag = "</upcase>";
            int lenCloseTag = closeTag.Length;
            string tmp;
            int startPos = -1;
            int endPos = 0;
            int endRPos = 0;

            do
            {
                startPos = text.IndexOf(openTag, startPos + 1);
                if (startPos >= 0) convertedText.Append(text, endPos, startPos - endPos);
                endPos = text.IndexOf(closeTag, endPos);
                if (endPos >= 0)
                {
                    tmp = text.Substring(startPos + lenOpentag, endPos - startPos - lenOpentag).ToUpper();
                    convertedText.Append(tmp);
                    endPos += lenCloseTag;
                    endRPos = endPos;
                }
            } while (endPos != -1);


            if (endRPos < text.Length - 1)
            {
                convertedText.Append(text, endRPos, text.Length - endRPos);
            }
            Console.WriteLine(convertedText);
        }
    }
}