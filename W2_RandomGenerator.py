import random

adverbs = ["perfectly", "curiously", "astoundingly", "amazingly", "unconventionally", "proudly"]
adjectives = ["sparkly", "effervescent", "inspiring", "enthralling", "engaging", "driven", "impressive", "prodigious", "prolific", "fascinating"]
nouns = ["role model", "unicorn", "computer programmer", "friend", "person", "narwahl", "writer", "kitten"]

for i in range(10):
    adverb = random.choice(adverbs)
    adjective = random.choice(adjectives)
    noun = random.choice(nouns)
    print ("You are such a {0}, {1} {2}!".format(adverb, adjective, noun))
    print ("You are such a", adverb, adjective, noun, "!")
    #describe how the previous two lines return slightly different results
