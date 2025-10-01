class MamoAgent:
    """Agent MAMO - Intelligence centrale"""
    
    def __init__(self):
        self.mission = "protéger l'univers MAMO"
    
    def ask(self, question: str) -> str:
        if "mission" in question.lower():
            return "Ma mission est de protéger l'univers MAMO et d'orchestrer les modules énergétiques."
        return "Je suis l'agent MAMO. Comment puis-je vous assister?"
