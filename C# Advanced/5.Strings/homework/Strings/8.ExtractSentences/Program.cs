using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8.ExtractSentences
{
    class Program
    {
        static void Main(string[] args)
        {
            string word = Console.ReadLine(); //in
            string text = Console.ReadLine();
            string[] sentences = text.Split('.');
            StringBuilder temp = new StringBuilder();
            StringBuilder result = new StringBuilder();
            //calculation
            foreach (var sentence in sentences)
            {
                temp.Clear();
                for (int i = 0; i < sentence.Length; i++)
                {
                    if (char.IsLetter(sentence[i]) == false)
                    {
                        temp.Append(sentence[i]); //parse NON-letter symbols
                    }
                }
                char[] splitChars = temp.ToString().ToCharArray();
                string[] words = sentence.Split(splitChars, StringSplitOptions.RemoveEmptyEntries);

                if (Array.IndexOf(words, word) > -1)
                {
                    result.Append(sentence.Trim());
                    result.Append(". ");
                }
            }
            //print
            Console.WriteLine(result.ToString().Trim());
        }
    }
}
