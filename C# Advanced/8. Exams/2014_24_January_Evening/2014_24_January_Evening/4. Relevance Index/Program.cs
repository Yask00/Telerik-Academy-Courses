﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4.Relevance_Index
{
    class Program
    {
        static string[] symbols = new string[] { " ", ",", ".", "(", ")", ";", "-", "!", "?" };
        static void Main()
        {
            string searchedWord = Console.ReadLine();

            int numberOfParagraphs = int.Parse(Console.ReadLine());

            List<string> paragraphs = new List<string>();
            List<int> indexes = new List<int> ();

            for (int i = 0; i < numberOfParagraphs; i++)
            {
                var currentLineWords = Console.ReadLine().Split(symbols, StringSplitOptions.RemoveEmptyEntries);

                int relevanceIndex = 0;

                for (int j = 0; j < currentLineWords.Length; j++)
                {
                    string word = currentLineWords[j];
                    if (word.ToLower() == searchedWord.ToLower())
                    {
                        relevanceIndex++;
                        currentLineWords[j] = word.ToUpper();
                    }
                }

                paragraphs.Add(string.Join(" ", currentLineWords));
                indexes.Add(relevanceIndex);
            }

            List<string> sortedParagraphs = new List<string>();

            while (sortedParagraphs.Count < paragraphs.Count)
            {
                int maxIndex = 0;
                int maxParagraphIndex = 0;

                for (int i = 0; i < indexes.Count; i++)
                {
                    if (maxIndex < indexes[i])
                    {
                        maxIndex = indexes[i];
                        maxParagraphIndex = i;
                    }
                }

                sortedParagraphs.Add(paragraphs[maxParagraphIndex]);
                indexes[maxParagraphIndex] = -1;
            }

            Console.WriteLine(string.Join(Environment.NewLine, sortedParagraphs));
        }
    }
}
