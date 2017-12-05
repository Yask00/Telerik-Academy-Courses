using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2.ReverseString
{
    class Program
    {
        static void Main()
        {
            string input = Console.ReadLine();
            Console.WriteLine(Reverse(input)); 
        }

        static string Reverse(string word)
        {
            StringBuilder sb = new StringBuilder();
            for (int i = word.Length - 1 ; 0 <= i ; i--)
            {
                sb.Append(word[i]);
            }

            return sb.ToString();
        }
    }
}
