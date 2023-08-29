import graphene
from graphene_django.types import DjangoObjectType
from .models import State
# import os
# import sys
from .data import us_states_and_territories

for name in us_states_and_territories:
    State.objects.create(name=name)
class StateType(DjangoObjectType):
    class Meta:
        model = State

class Query(graphene.ObjectType):
#    states = graphene.List(graphene.String(), filter=graphene.String())
    states = graphene.List(StateType, filter=graphene.String())

    def resolve_states(self, info, filter=None):
        if filter:
            print(State.objects.all())
            return State.objects.filter(name__icontains=filter.lower())
        else:
            return State.objects.all()

schema = graphene.Schema(query=Query)
