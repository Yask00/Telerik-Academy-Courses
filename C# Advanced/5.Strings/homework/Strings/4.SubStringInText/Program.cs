using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.SubStringInText
{
    class Program
    {
        static void Main()
        {
            string searchedWord = Console.ReadLine();
            string fullText = Console.ReadLine();

            int count = 0;
            int index = 0;

            while (true)
            {
                int foundIndex = fullText.IndexOf(searchedWord, index); //first occurence
                if (foundIndex < 0)
                {
                    break; // no more text;
                }

                count++;
                index = foundIndex + 1;

            }
            Console.WriteLine(count);
        }
    }
}
